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
    let noteID = req.params.id

    note.allNotes().then((notes) => {
        for (const note of notes) {
            if(note.id == noteID){
                //console.log(noteID + " is equal too " + note.id)
                const noteIndex = notes.indexOf(note)
                //console.log(notes)
                notes.splice(noteIndex, 1)
                //console.log(notes)
                let allNotes = JSON.stringify(notes) 
                //console.log(notes)
                //console.log(typeof notes)
                fs.writeFile('./db/db.json', allNotes, (err) =>
                err ? console.log(err) : console.log('Successfully added note!'));
               

            }

        }

    })
    note.allNotes().then((notes) => res.json(notes));
});





module.exports = router;