var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res){
    
    burger.all(function(data) {
        
        var hbsObject = {
            burgers: data
          };
          res.render("index", hbsObject);    
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"],
    [req.body.myData, 0], function (result) {
        console.log(req.body);
        console.log("here: " + req.body.myData);
        



        res.json({id: result.insertId});
    });
});

module.exports = router;