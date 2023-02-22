const express = require('express');
const bodyParser = require("body-parser");

const route = require("./routes/route");

const app = express();

app.use(bodyParser.json());
app.use('/', route);

app.listen(3000, function(){
    console.log("express app running on port:" + 3000);
});