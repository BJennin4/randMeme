const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' })
})

app.get('*', (req, res) => {
    res.render('broken', { title: 'Error' })
})

app.listen(3000, () => console.log("Got em (3000)"));