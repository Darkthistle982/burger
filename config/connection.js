const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(error) {
  if (error) {
    console.error("Error connecting: " + error.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});


module.exports = connection;