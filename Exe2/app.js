const express = require('express');
const home = require('./routes/home');
const signUp = require('./routes/signUp');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/views')))

app.use('/', home);
app.use('/', signUp);



app.listen(port, (req, res) => {
    console.log(`server started on port ${port}`);
});