const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const path = require('path');


app.set("view engine", "pug");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(express.static('src'));

app.get("/", (req,res) =>{

});

app.listen(port); //