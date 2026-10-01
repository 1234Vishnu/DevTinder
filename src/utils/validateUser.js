const validateUserData = (userData) => {
  const AllowedUpdates = [
    'firstName',
    'lastName',
    'password',
    'gender',
    'age',
    'photoUrl',
    'about',
    'skills',
  ];
  const updates = Object.keys(userData).every((key) => AllowedUpdates.includes(key));
  if (!updates) {
    throw new Error(
      'Invalid updates! Only firstName, lastName, password, gender, age, photoUrl, about, and skills can be updated.'
    );
  }
};

module.exports = { validateUserData };
