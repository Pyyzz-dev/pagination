var express = require("express");
var bodyParser = require("body-parser");
var lodash = require("lodash");
var routerPagination = express.Router();

// router
routerPagination.post("/page/:count/:index", (req, res, next)=>{
    var data = req.body.array;
    var array = data.split(",");
    var count = req.params.count;
    var index = req.params.index - 1;
    var pagination = lodash.chunk(array, count);
    res.json(pagination[index]);
})

module.exports = {
    routerPagination: routerPagination,
}