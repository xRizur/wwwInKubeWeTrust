const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const User = sequelize.define('user', {
    fullName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = { sequelize, User };

async function initializeDatabase() {
    try {
        await sequelize.sync({ force: true });
        console.log('Baza danych została zainicjowana!');
    } catch (error) {
        console.error('Nie udało się zainicjalizować bazy danych:', error);
    }
}

initializeDatabase();