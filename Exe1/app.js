const express = require('express');
const fs = require('fs');
const path = require('path');
const parser = require('body-parser')
const app = express();
const port = 5005;


app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

let data = fs.readFileSync('./views/pages/data/data.json', 'utf-8');


app.get('/', (req, res) => {
    res.render('./pages/home', {data:JSON.parse(data)});
});

// app.get("/:id", (req, res) => {
//     console.log(req.params.id);
    
//     data = JSON.parse(data);
//     user = data.find(x => x.id == req.params.id);


//     if (!user) return res.status(404).send("User not found!!!");
    
    
//     res.render('pages/home', user);
// })


app.get('/about', (req, res) => {
    res.render('./pages/about');

})

app.get('/contact', (req, res) => {
    res.render('./pages/contact');

})


app.listen(port, (req, res) => {
    console.log(`Server Started on port ${port}`);
});