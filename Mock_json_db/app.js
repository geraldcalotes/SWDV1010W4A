const express = require('express');
const ejs = require('ejs');
const userRoute = require("./routes/users.js");
const rateLimit = require('express-rate-limit');
require('dotenv').config();

//app object is an instance of express
const app = express();
const PORT = process.env.PORT || 8080;

//view engine
app.set("view engine","ejs");
app.set("views","./views");

//Middleware for serving static files
app.use(express.static('public'));

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minute
	max: 5, // Limit each IP to 5 requests per `window` (here, per minute)
	message: "Too many requests from this IP, please try again after 15 minutes",
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });
app.use(limiter);
app.use(userRoute);

app.listen(PORT,()=>{
	console.log(`Connected to port ${PORT}`);
});

