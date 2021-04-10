const express = require('express');

const app = express();

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
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.get('/api/items',(req,res)=>{
    const objs =[
        {itemId: '1', itemName : 'laptop'},
        {itemId: '2', itemName : 'desktop'}
    ];
    
    res.status(200).json({
        message:'List fetched successfully!',
        items: objs
    });
});

module.exports = app;
