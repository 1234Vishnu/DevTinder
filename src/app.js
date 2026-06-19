const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/hello', (req, res) => {
    res.send('Hello from the server');
});
app.get('/learn', (req, res) => {
    res.send('Learning Node.js is fun!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});