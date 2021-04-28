const express = require('express');
const cors = require('cors');
const pool = require('../db');

const router = express.Router();

router.use(cors());

router.get('/', async(req,res)=>{
    try{
        const catList = await pool.query("Select * from tblcategory order by \"catId\" asc");
        res.status(200).json({
            message:'Category List fetched successfully!',
            // rows is the sql results
            category: catList.rows
        });
    }catch(error){
        console.log(error);
    }
});


module.exports = router;