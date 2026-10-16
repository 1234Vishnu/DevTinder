const jwt = require('jsonwebtoken');
const User = require('./models/user');

const userAuth = async (req, res, next) => {
  //Read the cookie
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error('Unauthorized: No token provided');
    }
    const decoded = jwt.verify(token, 'Vishnu@123');
    const { email } = decoded;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    req.user = user; // Attach the user object to the request for further use
    next();
  } catch (err) {
    res.status(401).send('Unauthorized: ' + err.message);
  }
};

module.exports = { userAuth };
