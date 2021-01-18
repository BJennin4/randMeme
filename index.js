const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
let memes = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Start Here
app.get('/', (req, res) => {
    res.render('home', { memes, title: 'Wholesome Meme API' })
})

// Create
app.post('/', (req,res) => {
    console.log(req.body);
    const { memeUrl } = req.body;
    memes.push({ memeUrl, id: uuid(), rating: '' });
    res.send('Meme added');
}) 

// Read
app.get('/memes/:id', (req, res) => {
    const { id } = req.params;
    const meme = memes.find( c => c.id === id);
    res.render('memes/thatonememe', { meme, title: 'Your Selected Meme'} );
})

// Update
app.get('/memes/:id/rate', (req, res) => {
    const { id } = req.params;
    const meme = memes.find( c => c.id === id);
    res.render('memes/rate', { meme, title: 'Rate a Meme' });
})
app.patch('/memes/:id', (req, res) => {
    const { id } = req.params;
    const newRating = req.body.rating;
    const meme = memes.find( c => c.id === id);
    meme.rating = newRating;
    res.redirect('/');
})

// Destroy
app.delete('/memes/:id', (req, res) => {
    const { id } = req.params;
    memes = memes.filter(c => c.id !== id);
    res.redirect('/');
})

// If you get lost
app.get('*', (req, res) => {
    res.render('broken', { title: 'Error' })
})

// Hosting the server
app.listen(3000, () => console.log("Got em (3000)"));