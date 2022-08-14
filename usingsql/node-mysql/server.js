
const express = require('express');
const bodyparser = require('body-parser');
const mysqlConnection  = require("./db");
const InteractlyRoute = require("./routes/interactly");


var app = express(); 
app.use(bodyparser.json());

app.use("/", InteractlyRoute);



app.listen(3000);