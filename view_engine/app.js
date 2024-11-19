const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.set("views","./views");
app.set("view engine","ejs");

app.get("/home",(req,res) => {
	var message = "Hello World,Welcome to my Home Page!!";
	res.render("index",{message});
});


app.listen(PORT,()=>{
	console.log(`Connected to port ${PORT}`);
});
