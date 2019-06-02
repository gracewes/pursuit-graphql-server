var mysql = require('mysql');
var secrets = require('./secrets.json')

var con = mysql.createConnection({
  host: secrets.host,
  user: secrets.username,
  password: secrets.password,
  database: secrets.database 
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;