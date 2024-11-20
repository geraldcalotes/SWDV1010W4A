const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;



app.set("views","./views");
app.set("view engine","ejs");

app.use(express.static("public/images"));


app.get("/",(req,res) => {
	res.render("home");
});


app.listen(PORT,()=>{
	console.log(`Server is listening to port ${PORT}`);
});
