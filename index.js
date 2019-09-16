const express=require("express");
const bodyParser=require("body-parser");

const {mongoose}=require("./db.js");
var studentController=require('./controllers/studentController.js');

var app=express();
app.use(bodyParser.json());

app.listen(3000,()=>console.log('Listening to Port: 3000'));


app.use('/students',studentController);