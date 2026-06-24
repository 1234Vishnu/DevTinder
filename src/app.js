const express = require('express');
const app = express();

app.use('/', (err, req, res, next) => {
  if (err) {
    res.status(500).send('Something went wrong from "/1');
  }
});

app.get('/getUserData', (req, res) => {
  try {
    throw new Error('Simulated error in /getUserData route');
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
});

app.use('/', (err, req, res, next) => {
  if (err) {
    res.status(500).send('Something went wrong from "/2');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
