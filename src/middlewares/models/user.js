const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

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
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email address' + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error('Password is not strong enough');
        }
      },
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
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error('Invalid URL for photo');
        }
      },
    },
    about: {
      type: String,
      default: 'This is default section for the user',
    },
    skills: {
      type: [String],
      validate(value) {
        if (value.length > 5) {
          throw new Error('Skills cannot have more than 5 skills');
        }
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
