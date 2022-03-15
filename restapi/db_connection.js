var mysql = require('mysql')
const pool = mysql.createConnection({
  host: '49.236.208.6',
  user: 'selena',
  password: 'DNL123$321',
  database: 'selena',
  port: '23306',
  multipleStatements: true
});

module.exports = pool;