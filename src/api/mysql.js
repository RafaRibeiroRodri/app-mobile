const mysql = require('mysql');

var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Brawlhalla123@',
  database: 'iCondus'
});

exports.connection = connection;