const express = require('express');
const pool = require('./db');

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

//works for arrays
// app.get('/api/items',(req,res)=>{
//     const objs =[
//         {itemId: '1', itemName : 'laptop'},
//         {itemId: '2', itemName : 'desktop'}
//     ];
    
//     res.status(200).json({
//         message:'Item List fetched successfully!',
//         items: objs
//     });
// });

app.get('/api/items', async(req,res)=>{
    try{
        
        const getList = await pool.query("Select * from tblItem");
        res.status(200).json({
            message:'Item List fetched successfully!',
            // rows is the sql results
            items: getList.rows
        });
    }catch(error){
        console.log(error);
    }
});

module.exports = app;
