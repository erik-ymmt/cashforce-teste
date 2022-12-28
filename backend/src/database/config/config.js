require('dotenv').config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || 'cashforce',
  host: process.env.DB_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};