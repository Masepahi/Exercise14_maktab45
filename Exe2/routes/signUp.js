const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const signUpaController = require("../localModule/signUpHandler");
const routerSignUp = express.Router();
let counter = 0;

routerSignUp.use(bodyParser.urlencoded({ extended: false }));
routerSignUp.use(bodyParser.json());

routerSignUp.get("/signUp", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/signUp.html"));
});

routerSignUp.post("/signUp", (req, res) => {
  if (signUpaController.dataFiller(req.body) === true) {
    res.redirect('/')
    res.json(400)
  } else res.json(200) 
});


module.exports = routerSignUp;