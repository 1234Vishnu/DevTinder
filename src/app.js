const express = require('express');
const { connectDB } = require('../config/database'); // Import the database connection
const app = express();
const User = require('./middlewares/models/user');

app.use(express.json()); // Middleware to parse JSON request bodies

app.post('/signup', async (req, res) => {
  //Creating a new instance of the User model.
  console.log(req.body);
  const user = new User(req.body);
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
