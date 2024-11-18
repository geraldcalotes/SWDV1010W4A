const express = require('express');
const app = express();
app.get('/user/:id',(req,res) => {
	const userId = req.params.id;
	res.send(`User id is ${userId}`);
});

const port=3000;
app.listen(port,() => {
	console.log('Server listening to port 3000');
});

