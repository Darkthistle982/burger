const connctions = require("../config/connection.js");

orm = {
  selectAll: function(tableInput, callback) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      callback(result);
    });
  },
  insertOne: function() {},
  updateOne: function() {}
};

module.exports = orm;
