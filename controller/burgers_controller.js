var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res){
    
    burger.all(function(data) {
        var uneatenBurgers = [];
        var devouredBurgers = [];
        var parsed = JSON.parse(JSON.stringify(data));
        for (i=0; i<parsed.length; i++){
            if(parsed[i].devoured == 0){
            uneatenBurgers.push(parsed[i]);
            }else{
                devouredBurgers.push(parsed[i]);
            }
        }
        
        var hbsObject = {
            burgers: uneatenBurgers,
            burgers2: devouredBurgers
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

router.put("/api/burgers:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition
    );
    
})

module.exports = router;