const express = require('express');
const ejs = require('ejs');
const userRoute = require("./routes/users.js");
require('dotenv').config();

//app object is an instance of express
const app = express();
const PORT = process.env.PORT || 8080;

//view engine
app.set("view engine","ejs");
app.set("views","./views");

//Middleware for serving static files
app.use(express.static('public'));
app.use(userRoute);

app.listen(PORT,()=>{
	console.log(`Connected to port ${PORT}`);
});

