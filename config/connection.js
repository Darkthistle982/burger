const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

app.listen(PORT, function(error) {
    if (error) {
        console.error("Error Connecting: " + error.stack);
        return;
    }
    console.log('listening on port ' + PORT)
});

module.exports = connection;