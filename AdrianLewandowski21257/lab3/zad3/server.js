const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('pages/home', { title: 'Strona główna' }));
app.get('/about', (req, res) => res.render('pages/about', { title: 'O nas' }));
app.get('/contact', (req, res) => res.render('pages/contact', { title: 'Kontakt' }));
app.get('/help', (req, res) => res.render('pages/help', { title: 'Pomoc' }));


app.use((req, res) => {
  res.status(404).render('pages/404', { title: '404 - Nie znaleziono strony' });
});


app.listen(PORT, () => console.log(`Serwer działa na http://localhost:${PORT}`));
