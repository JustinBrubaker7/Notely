const express = require('express');
const router = express.Router();
const data = require('../db/db.json')
const fs = require('fs');
const note = require('../db/notes.js');


//route to get notes
router.get('/notes', (req,res)=> {
    note.allNotes().then((notes) => res.json(notes));

})


//route to add new notes
router.post('/notes', (req,res)=> {
    const newNotes = JSON.stringify(req.body)
    note.saveNote(newNotes).then((notes) => res.json(notes));

      // const newNotes = req.body
      // note.saveNote(newNotes)


})






module.exports = router;