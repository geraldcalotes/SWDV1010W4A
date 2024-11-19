const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;


app.get("/",(req,res) => {
	const id = req.query.id;
	const username = req.query.username;

	res.send(`User id: ${id} \n Username: ${username}`);
});

app.get("/products/:id",(req,res) => {
	const product_id = req.params.id;
	const products = [
		{"id":1,"name":"Product A"},
		{"id":2,"name":"Product B"},
		{"id":3,"name":"Product C"},

	];
	const product = products.find(products => products.id === parseInt(product_id));
	res.send(`Product ID: ${product.id} \n Name : ${product.name}`);

});

app.listen(PORT, ()=>{
	console.log(`Starting server in port ${PORT}`);
});
