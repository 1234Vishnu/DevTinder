const validate = require('validator');

const validateSignup = (req) => {
  const { firstName, lastName, email, password, gender, age } = req.body;

  if (!firstName) {
    throw new Error('First name is required');
  } else if (!validate.isEmail(email)) {
    throw new Error('Invalid email format');
  } else if (!validate.isStrongPassword(password)) {
    throw new Error('Password is not strong enough');
  }
};
module.exports = { validateSignup };
