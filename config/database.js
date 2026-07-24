const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://viratvishnu04_db_user:Vishnu1234@cluster0.pry8l0k.mongodb.net/devTinder'
  );
};

module.exports = {
  connectDB,
};
