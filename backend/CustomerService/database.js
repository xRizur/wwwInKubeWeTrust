const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' 
});

const Project = sequelize.define('project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ownerId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});


const Task = sequelize.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  }
});

Project.hasMany(Task);
Task.belongsTo(Project);

module.exports = { sequelize, Project, Task };

async function initializeDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('Baza danych została zainicjowana!');
  } catch (error) {
    console.error('Nie udało się zainicjalizować bazy danych:', error);
  }
}

initializeDatabase();
