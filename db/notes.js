const fs = require('fs').promises;




class Note {
    read(){
       return fs.readFile('./db/db.json', 'utf-8')
    }
    
    allNotes(){
       return this.read().then((notes) => {
            const parseNotes = JSON.parse(notes).map((note) => note)
            return parseNotes;
        })
    }
    saveNote(note){
    let oldNoteData = this.read().then((notes) => {
        console.log(oldNoteData)
    })

    return fs.writeFile('./db/db.json', oldNoteData, (err) =>
    err ? console.log(err) : console.log('Successfully added note!')
  );
     }
}



module.exports = new Note();