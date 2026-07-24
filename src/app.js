const express = require('express');
const { connectDB } = require('../config/database'); // Import the database connection
const app = express();
const User = require('./middlewares/models/user');

app.post('/signup', async (req, res) => {
  const user = new User({
    name: 'vishnu',
    email: 'vishnu@gmail.com',
    password: 'vishnu123',
    gender: 'male',
    age: 30,
  });
  try {
    await user.save();
    res.send('User created successfully');
  } catch (err) {
    res.status(500).send('Error creating user: ' + err.message);
  }
});

connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
