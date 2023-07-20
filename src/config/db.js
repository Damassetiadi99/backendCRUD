const { Pool } = require('pg');
require('dotenv').config()
const pool = new Pool({
  host:'127.0.0.1',
  user:'postgres',
  password:'damas990504',
  database: 'dbdamas',
  port: 5432
});
module.exports = pool