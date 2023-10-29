const { sequelize } = require('./database');

sequelize.sync({ force: true })  // force: true oznacza, że baza danych będzie tworzona od nowa przy każdym uruchomieniu serwera
  .then(() => {
    console.log('Baza danych została zainicjowana.');
  });
