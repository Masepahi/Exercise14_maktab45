const express = require('express');
const checker = express.Router()

checker.post('/userCheck', (req, res) => {
    console.log(req);
})