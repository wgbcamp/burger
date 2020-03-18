// Set up MySQL connection.
var mysql = require("mysql");


var connection = mysql.createConnection({
  user: "xkyhxjhla65vn2lx",
  password: "wjurhduqibjk296r",
  host: "qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  database: "e1zibpblc0zeqfw9"
})

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });


// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
