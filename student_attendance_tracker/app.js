const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;
const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml');
const authRoutes = require('./routes/authRoutes');



app.set("view engine",'ejs');
app.set('views','./views');

//serve the definition file
app.use('/api/docs/',swaggerUI.serve,swaggerUI.setup(swaggerDocument));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/',authRoutes);



//connect to mongodb
mongoose.connect(uri).then(
    async () =>{
        console.log('Connected to MongoDB');
    app.listen(PORT, ()=> {
    console.log(`Connected on port ${PORT}`)
        });
    }
).catch((err) => {
    console.log(`Error connecting to database ${err}`);
})
