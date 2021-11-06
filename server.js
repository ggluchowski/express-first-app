const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express(); // stworzenie nowej aplikacji expressowej i przypisanie jej do stałej app
app.engine('.hbs', hbs({ extname: 'hbs', layoutsDir: './views/layouts', defaultLayout: 'mainPage' })); //mozliwosc zmiany rozszerzenia oraz sciezki w hbs()
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});
app.get('/info', (req, res) => {
  res.render('info');
});
app.get('/history', (req, res) => {
  res.render('history', {layout: 'dark'});
});
app.get('/hello/:name', (req, res) => {
  res.render('hello', {name: req.params.name});
});


// Obsługa niepoprawnego linku, na końcu
app.use((req,res) => {
  res.status(404).send('404 not found...');
})
app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});