const express = require('express');

const app = express();

//This will match the GET, POST, PATCH, and DELETE methods for the /user route
app.get('/user', (req, res) => {
    console.log('GET User route');
    res.send('GET User route');
});

app.post('/user', (req, res) => {
    console.log('POST User route');
    res.send('POST User route');
});

app.patch('/user', (req, res) => {
    console.log('PATCH User route');
    res.send('PATCH User route');
});

app.delete('/user', (req, res) => {
    console.log('DELETE User route');
    res.send('DELETE User route');
});

// This will match all the HPP methods for the /user route
app.use('/user', (req, res) => {
    console.log('Fallback User route');
    res.send('User route');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});