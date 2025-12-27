const express = require('express');
const sum = require('./math');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Kalkulator działa! Spróbuj /add?a=5&b=10');
});

app.get('/add', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Podaj liczby a i b');
  }

  const result = sum(a, b);
  res.json({ a, b, result });
});

app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});