const express = require('express');
const app = express();
app.get('/user/:id',(req,res) => {
	const userId = req.params.id;
	res.send(`User id is ${userId}`);
});

app.use('/search',(req,res) => {
	const query = req.query.q;
	res.send(`The query search term is ${query}`);
});


const port=3000;
app.listen(port,() => {
	console.log('Server listening to port 3000');
});

