const fs = require('fs').promises;




class Note {
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
        return this.read().then((notes) => {
            const oldnotes = JSON.parse(notes)
            //console.log(oldnotes)
            oldnotes.push(note)
            console.log(oldnotes)
            fs.writeFile('./db/db.json', oldnotes, (err) =>
            err ? console.log(err) : console.log('Successfully added note!')
  );
        })
     }
}


module.exports = new Note();