const express = require('express');
const jwt = require('jsonwebtoken');
const PORT = 8000 || 8080;
const app = express();

app.post('/user/generateToken',(req,res)=>{
    const secretKey = 'supersecretkey';
    const data = {
        time: Date(),
        userId: 12,
    }
    const token = jwt.sign(data,secretKey);
    res.json({token});
});

app.get('/user/validateToken',(req,res)=>{
    const secretKey = 'supersecretkey';

    try{
        const token = req.header.authorization.split(' ')[1];
        console.log(token);
        const decoded = jwt.verify(token,secretKey);
        res.json({decoded});
    }catch(error){
        res.status(401).json({error: 'Invalid token'});
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});