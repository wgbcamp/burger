 var connection = require("../config/connection.js");
 var mysql = require("mysql");

 var orm = {
 selectAll: function(){

    var sql = "SELECT burgers.id, burger_name, devoured FROM burgers;";

    connection.query(sql, function(err, data) {

        if (err) {
            throw err;
        }
        console.log(data);
    });
 },

 insertOne: function(){

},

updateOne: function(){

}

}
 
 module.exports = orm;

