const mysql = require('mysql');

var conexao= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Brawlhalla123@',
  database: 'iCondus'
});

module.exports = conexao;