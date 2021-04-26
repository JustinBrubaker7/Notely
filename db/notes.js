const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');



class Note {
    constructor(id){
        this.id = uuidv4();
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
            
            //console.log(note)
            let newNote = JSON.parse(note)
            //console.log(oldnotes)
            
            oldnotes.push(newNote)
            
            console.log(oldnotes)
            
            let allNotes = JSON.stringify(oldnotes)
            
            fs.writeFile('./db/db.json', allNotes, (err) =>
            err ? console.log(err) : console.log('Successfully added note!'));
        })
     }
}


module.exports = new Note();