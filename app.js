var express = require('express');
var dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();
var path = require('path')
const port = process.env.port
require('./connection');

const app = express();
app.use(express.json());
app.use(cors())


const userRoute = require('./routes/userRoutes')
const proRoute  = require('./routes/proRoutes')
app.use('/api',userRoute);
app.use('/p',proRoute);
app.use('/uploads',express.static(path.join(__dirname,"uploads")));


app.listen(port,()=>{
    console.log(`Server is up and running in ${port}`)
})

