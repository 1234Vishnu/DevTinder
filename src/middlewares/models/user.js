const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      validate(value) {
        if (!['male', 'female', 'others'].includes(value)) {
          throw new Error('Gender must be either male, female, or others');
        }
      },
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    photoUrl: {
      type: String,
      default: 'https://www.flaticon.com/free-icon/user_149071',
    },
    about: {
      type: String,
      default: 'This is default section for the user',
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
