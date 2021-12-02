const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) { //JAWSDB_URL: when we deploy to heroku it checks these environment variables inside our heroku config variables. Set up.
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else { //else run it locally
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
