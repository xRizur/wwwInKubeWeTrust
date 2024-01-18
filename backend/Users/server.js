const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { body, validationResult } = require('express-validator');
const helmet = require('helmet');
const cors = require('cors');
const { sequelize, User } = require('./database.js'); // Aktualizuj ścieżkę do modelu użytkownika

const app = express();
const port = 3001;

// Konfiguracja Passport - LocalStrategy
passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return done(null, false, { message: 'Nie znaleziono użytkownika.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Nieprawidłowe hasło.' });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

// Konfiguracja Passport - JwtStrategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
};

passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    try {
        const user = await User.findByPk(jwt_payload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
}));

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(passport.initialize());

// Endpoint rejestracji
app.post('/register', 
    body('fullName').isLength({ min: 1 }).withMessage('Imię i nazwisko jest wymagane'),
    body('username').isAlphanumeric().withMessage('Nazwa użytkownika może zawierać tylko litery i cyfry'),
    body('email').isEmail().withMessage('Nieprawidłowy adres email'),
    body('password').isLength({ min: 8 }).withMessage('Hasło musi mieć co najmniej 8 znaków'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { fullName, username, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({
                fullName,
                username,
                email,
                password: hashedPassword
            });
            res.status(201).send('User registered');
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }
);

// Endpoint logowania
app.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (!user) {
            return res.status(401).json(info);
        }
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    })(req, res, next);
});

// Endpoint do pobierania danych użytkownika
app.get('/api/user', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'Użytkownik nie znaleziony' });
        }
        res.json({ fullName: user.fullName, email: user.email });
    } catch (error) {
        res.status(500).json({ message: 'Błąd serwera' });
    }
});

// Endpoint do aktualizacji danych użytkownika
app.put('/api/user', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'Użytkownik nie znaleziony' });
        }
        user.fullName = req.body.fullName || user.fullName;
        user.email = req.body.email || user.email;
        await user.save();
        res.json({ message: 'Dane użytkownika zaktualizowane' });
    } catch (error) {
        res.status(500).json({ message: 'Błąd serwera' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
