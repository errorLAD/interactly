const dotenv = require("dotenv")
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

dotenv.config({path:'./config.env'});
//config the database

const DB = process.env.DATABASE;
const mongoose = require('mongoose');

mongoose.connect(DB, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.json({"message": "Welcome"});
});

require('./app/routes/interactly.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});