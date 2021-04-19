const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());

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

app.get('/api/items', async(req,res)=>{
    try{
        const getList = await pool.query("Select * from tblItems order by \"itemId\" asc");
        res.status(200).json({
            message:'Item List fetched successfully!',
            // rows is the sql results
            items: getList.rows
        });
    }catch(error){
        console.log(error);
    }
});

app.post('/api/items', async(req,res)=>{
    try{
        const {itemId, itemName} = req.body;
        // Double quotes to keep the column Name casing.
        const postList = await pool.query("Insert into tblitems (\"itemName\") values ($1)", [itemName]);
        res.status(200).send({
            message:'Item posted successfully!',
        });
    }catch(error){
        console.log(error);
    }
});

app.put('/api/items', async(req,res)=>{
    try{
        const {itemId, itemName} = req.body;
        // Double quotes to keep the column Name casing.
        const putList = await pool.query("Update tblitems set \"itemName\" = $1 where \"itemId\" = $2", [itemName, itemId]);
        res.status(200).send({
            message:'Item changed successfully!',
        });
    }catch(error){
        console.log(error);
    }
});

app.delete('/api/items/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        // Double quotes to keep the column Name casing.
        const deleteList = await pool.query("Delete from tblitems where \"itemId\" = $1", [id]);
        res.status(200).send({
            message:'Item deleted successfully!',
        });
    }catch(error){
        console.log(error);
    }
});

module.exports = app;
