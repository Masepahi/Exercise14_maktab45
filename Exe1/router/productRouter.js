const express = require('express');
const fs = require('fs');
const productRouter = express.Router();




productRouter.get('/products/:id', (req, res) => {
    let id = req.params.id
    console.log(id);

    fs.readFile('./public/data/data.json', 'utf8', (err, data) => {
        if (err) return res.status(400).send(err);

        let product = data.find(item => item.id === id);
        console.log(product);

        res.render('./pages/product', {product});



    })

});

module.exports = productRouter;
