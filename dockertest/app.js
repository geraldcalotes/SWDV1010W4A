const express = require('express');
const app = express();
const PORT = 8000;

app.get('/',(req,res)=>{
    res.send('Hello World from Docker');
});

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}`);
})