const express = require('express');
const { connectDB } = require('../config/database'); // Import the database connection
const app = express();
const User = require('./middlewares/models/user');

app.use(express.json()); // Middleware to parse JSON request bodies

// Endpoint to create a new user
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

// Endpoint to fetch all users
app.get('/users', async (req, res) => {
  const allUsers = User.find({});
  try {
    const users = await allUsers;
    res.send(users);
  } catch (err) {
    res.status(500).send('Error fetching users: ' + err.message);
  }
});

// Endpoint to fetch a user by email
app.get('/user', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(500).send('Error fetching user: ' + err.message);
  }
});

// Endpoint to delete a user by ID
app.delete('/user', async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.send('User deleted successfully');
    }
  } catch (err) {
    res.status(400).send('Error deleting user: ' + err.message);
  }
});

// Endpoint to update a user by ID
app.patch('/user', async (req, res) => {
  const { userId } = req.body;
  const dataToUpdate = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, dataToUpdate);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.send('User updated successfully');
    }
  } catch (err) {
    res.status(400).send('Error updating user: ' + err.message);
  }
});

// Endpoint to update a user's name by email
app.patch('/userEmail', async (req, res) => {
  const { email } = req.body;
  const dataToUpdate = req.body;
  try {
    await User.findOneAndUpdate({ email: email }, dataToUpdate);
    res.send('User email updated successfully');
  } catch (err) {
    res.status(400).send('Error updating user email: ' + err.message);
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
