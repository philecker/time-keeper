// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  url: process.env.URL,
  username: process.env.USER_ID,
  password: process.env.PASSWORD,
  system_id: process.env.SYSTEM_ID
};