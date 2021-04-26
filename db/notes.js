const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');



class Note {
    constructor(id){
        this.id = id;
        //this.id = uuidv4();
    }
    read(){
       return fs.readFile('./db/db.json', 'utf-8')
    }
    
    allNotes(){
       return this.read().then((notes) => {
            const parseNotes = JSON.parse(notes).map((note) => note)
           // console.log(parseNotes)
            return parseNotes;
        })
    }
    saveNote(note){
        return this.allNotes().then((notes) => {           
            let oldnotes = notes
            let newNote = JSON.parse(note)          
            oldnotes.push(newNote)           
            let allNotes = JSON.stringify(oldnotes)           
            fs.writeFile('./db/db.json', allNotes, (err) =>
            err ? console.log(err) : console.log('Successfully added note!'));
        })
     }
     deleteNote(note){
        return this.allNotes().then((notes) => {           
            for (note of notes){
                if(note.id == notes.id){
                    console.log('FOUND IT' + notes.id)
        
                }
            }
        })

     }
}


module.exports = new Note();