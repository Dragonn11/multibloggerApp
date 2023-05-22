const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const blogRoutes =require('../backend/routes/blog');
const authRoutes =require('../backend/routes/auth');
const userRoutes =require('../backend/routes/user');
const categoryRoutes =require('../backend/routes/category'); 
const tagRoutes = require('../backend/routes/tag');
const formRoutes = require('../backend/routes/form');

mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true }).
then(()=> console.log('DB connected'))
.catch(err=>console.log(err));



//app

const app =express()

//middleswares

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if(process.env.NODE_ENV=="development"){
    app.use(cors({origin:`${process.env.CLIENT_URL}`}));
}


//routes middleware

app.use('/api',blogRoutes);
app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',tagRoutes);
app.use('/api',formRoutes);

const port =  process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})