 var connection = require("../config/connection.js");

 function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

 var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT burgers.id, burger_name, devoured FROM burgers;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
        console.log(vals +" from ORM");
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
  };

 
 module.exports = orm;

//  var orm = {
    //  selectAll: function(cb){
    
    //     var sql = "SELECT burgers.id, burger_name, devoured FROM burgers;";
    
    //     connection.query(sql, function(err, result) {
    
    //         if (err) {
    //             throw err;
    //         }
    //         console.log(result);
    //         cb(result);
    //     });
    //  },
    
    //  insertOne: function(){
    
    // },
    
    // updateOne: function(){
    
    // }
    
    // }