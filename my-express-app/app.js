const express = require('express');
const app = express();

//middleware
app.use(express.json());
app.use((req,res,next)=>{
	console.log(`Request received : ${req.method}, ${req.url}`);
	next();
});
/*
app.get('/',(req,res) => {
	res.send('This works second');
});*/

app.post('/create',(req,res) => {
	const userName = req.body.name;
	const userEmail = req.body.email;
	res.send(`Username : ${JSON.stringify(userName)} \n Email : ${JSON.stringify(userEmail)}`);
});

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

