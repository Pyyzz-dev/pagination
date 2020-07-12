var express = require("express");
var bodyParser = require("body-parser");
var routerPagination = require("../Pagination/code/server.js");
var app = express();

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app normal
app.get("/admin", (req, res) =>{
    res.json("Connect successful at port:3000");
})
app.listen("3000", ()=>{
    console.log("Connect successful at port:3000");
})
app.use("/pagination", routerPagination.routerPagination);





