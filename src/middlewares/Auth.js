const adminAuth = (req, res, next) => {
    console.log('Auth middleware for /admin routes');
    const token = 'xyz';
    const auth = token === 'xyz'; // Simulated authentication check
    if (!auth) {
        return res.status(401).send('Unauthorized');
    }
    else {
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log('Auth middleware for /user routes');
    const token = 'abc';
    const auth = token === 'abc'; // Simulated authentication check
    if (!auth) {
        return res.status(401).send('Unauthorized');
    }
    else {
        next();
    }
}
module.exports = {
    adminAuth,
    userAuth
}