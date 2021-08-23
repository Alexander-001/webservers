require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const hbs = require('hbs');

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');


//static content
app.use(express.static('public'));

app.get('/generic', (request, response) => {
    response.render('generic');
});

app.get('/', (request, response) => {
    response.render('home', {
        nombre: 'Alexander Ortiz',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (request, response) => {
    response.render('elements');
})

app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Running in: http://localhost:${port}`)
});