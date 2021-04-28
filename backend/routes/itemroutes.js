const express = require('express');
const cors = require('cors');
const pool = require('../db');

const router = express.Router();

router.use(cors());

router.get('/', async(req,res)=>{
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

router.post('/', async(req,res)=>{
    try{
        const {itemId, itemName, itemSN, catId, vendorId, createdBy, createdDate} = req.body;
        // Double quotes to keep the column Name casing.
        const postList = await pool.query("Insert into tblitems (\"itemName\",\"itemSN\",\"catId\",\"vendorId\",\"createdBy\",\"createdDate\")" +
        "values ($1,$2,$3,$4,$5,$6)", [itemName,itemSN,catId,vendorId,createdBy,createdDate]);
        res.status(200).send({
            message:'Item posted successfully!',
        });
    }catch(error){
        console.log(error);
    }
});

router.put('/', async(req,res)=>{
    try{
        const {itemId, itemName, itemSerialNum, catId, vendorId} = req.body;
        // Double quotes to keep the column Name casing.
        const putList = await pool.query("Update tblitems set \"itemName\" = $1 where \"itemId\" = $2", [itemName, itemId]);
        res.status(200).send({
            message:'Item changed successfully!',
        });
    }catch(error){
        console.log(error);
    }
});

router.delete('/:id', async(req,res)=>{
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

module.exports = router;