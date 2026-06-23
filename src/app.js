const express = require('express');

const app = express();

// Multiple Route Handlers
app.get('/user', (req, res, next) => {
    console.log('GET User route1');
    // res.send('GET User route1');
    next(); // Pass control to the next handler
},
    (req, res, next) => {
        console.log('GET User route2');
        //res.send('GET User route2')
        next(); // Pass control to the next handler
    },
    (req, res, next) => {
        console.log('GET User route3');
        // res.send('GET User route3');
        next(); //Pass the control to the next handler
    },
    (req, res, next) => {
        console.log('GET User route4');
        // res.send('GET User route4');
        next(); //Pass the control to the next handler
    },
    (req, res, next) => {
        console.log('GET User route5');
        res.send('GET User route5');
        next(); //Pass the control to the next handler
    }
);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});