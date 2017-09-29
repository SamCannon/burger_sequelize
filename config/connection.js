const mysql = require('mysql');
const Sequelize = require('sequelize');


var sequelize = new Sequelize('burgers_db', 'Scannon', 'ARSC0822' {
	host: localhost,
	dialect: mysql,
	pool: {
		max: 5,
		min: 0,
		idle: 5000
	}
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;