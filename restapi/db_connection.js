var mysql = require('mysql')
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'selena',
  password: 'TH123$321',
  database: 'selena',
  port: '3306',
  multipleStatements: true
});

module.exports = pool;