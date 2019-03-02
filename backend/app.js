const express=require('express');
const mongoose=require('mongoose');

const bodyParser = require('body-parser');
const app=express();

const authenticateRoute=require('./authenticate/authenticate');
const roomRouter=require('./routes/room');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,x-access-token');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');

    next();
});
app.use('/api/auth',authenticateRoute);
app.use('/api/room',roomRouter);
module.exports=app;
