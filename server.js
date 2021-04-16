const express = require('express');
const path = require('path');
const router = require('./router/api-routes');


const app = express()
const PORT = process.env.PORT  || 3050


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', router);


app.get('/', (req, res)=> res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res)=> res.sendFile(path.join(__dirname, './public/notes.html')));



app.listen(PORT, ()=> console.log(`App is running on port ${PORT}`))
 