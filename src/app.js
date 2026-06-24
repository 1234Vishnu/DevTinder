const express = require('express');
const { adminAuth } = require('./middlewares/Auth');
const { userAuth } = require('./middlewares/Auth');
const app = express();

app.use('/admin', adminAuth);


app.get('/admin/getAllData', (req, res) => {
    res.send('Get all admin data');
});

app.get('/admin/getUserData', (req, res) => {
    res.send('Get user data for admin');
});

app.get('/user/getProfile', userAuth, (req, res) => {
    res.send('Get user profile');
});

app.post('/user/login', (req, res) => {
    res.send('User logedin successfully');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});