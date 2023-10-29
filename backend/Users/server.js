const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const { sequelize, User } = require('./database.js'); // Zastąp 'path_to_your_model_file' ścieżką do pliku z modelem
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cors = require('cors');
const sessionStore = new SequelizeStore({
    db: sequelize
});
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(session({ 
    secret: 'your_session_secret', 
    resave: false, 
    saveUninitialized: false,
    store: sessionStore // Używaj magazynu sesji Sequelize
}));

sessionStore.sync(); // Synchronizuj magazyn sesji z bazą danych

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Invalid credentials' });
            }
        } else {
            return done(null, false, { message: 'Invalid credentials' });
        }
    } catch (err) {
        done(err);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (err) {
        done(err, false);
    }
});

app.post('/register', async (req, res) => {
    try {
        const { fullName, username, email, phoneNumber, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            full_name: fullName,
            username: username,
            email: email,
            phone_number: phoneNumber,
            password: hashedPassword
        });
        res.status(201).send('User registered');
    } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
}

});

app.post('/login', passport.authenticate('local'), (req, res) => {
    const token = jwt.sign({ id: req.user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});