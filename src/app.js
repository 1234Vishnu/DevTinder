const express = require('express');

const app = express();

// Reading query parameters 
app.get('/user/:id/:name/:password', (req, res) => {
    console.log(req.params);
    res.send('GET User route');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});