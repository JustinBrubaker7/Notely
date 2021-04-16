const express = require('express');
const router = express.Router();
const data = require('../db/db.json')
const fs = require('fs');

router.get('/notes', (req,res)=> {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
})

router.post('/notes', (req,res)=> {

    const newNotes = req.body;

    fs.appendFile('db.json', newNotes, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
})






module.exports = router;