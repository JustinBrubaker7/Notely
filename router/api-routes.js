const express = require('express');
const router = express.Router();
const data = require('../db/db.json')
const fs = require('fs');
const note = require('../db/notes.js');
const { v4: uuidv4 } = require('uuid');


//route to get notes
router.get('/notes', (req,res)=> {
    note.allNotes().then((notes) => res.json(notes));

})


//route to add new notes
router.post('/notes', (req,res)=> {
    let id = uuidv4()

    console.log(req.body)

    req.body.id = id;
    const newNote = JSON.stringify(req.body);
    console.log(req.body)
    note.saveNote(newNote).then((notes) => {
        res.json(notes)
    })
})

router.delete('/notes/:id', (req, res) => {
    //find note by id
    const newNote = JSON.stringify(req.body);
    note.deleteNote(newNote);
    //remove it from array
    console.log("DELETE THIS!")
});





module.exports = router;