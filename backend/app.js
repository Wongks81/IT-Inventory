const express = require('express');
const cors = require('cors');


const app = express();

const itemRoutes = require('./routes/itemroutes');
const catRoutes = require('./routes/catroutes');


// use body-parser middleware
app.use(express.json());
// Parse url codes, extended false is to only support default features in url encoding
app.use(express.urlencoded({extended :false}));

app.use((req,res,next) =>{
    //************* Allow Cors **************//
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
        );
    res.setHeader("Access-Control-Allow-Methods", "DELETE, GET, POST, PUT, OPTIONS");
    next();
});

app.use('/api/items', itemRoutes);
app.use('/api/category', catRoutes);


module.exports = app;
