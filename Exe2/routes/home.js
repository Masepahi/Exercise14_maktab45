const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const routerHome = express.Router();


routerHome.use(bodyParser.urlencoded({ extended: false }));
routerHome.use(bodyParser.json());

routerHome.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

routerHome.post('/', (req, res) => {
    let userData =  req.body
    
})
module.exports = routerHome;