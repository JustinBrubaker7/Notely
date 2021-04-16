const express = require('express');
const router = express.Router();
const data = require('../db/db.json')

router.get('/notes', (req,res)=> {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
})









module.exports = router;