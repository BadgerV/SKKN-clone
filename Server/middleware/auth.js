const userModel = require('../Models/UserModel');
const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.sendStatus(403);
      }

    try {
        const data = jwt.verify(token, "mySecretKey");
        req.userId = data.id;
        req.userRole = data.role;
    return next();
        // Almost done
    } catch {
        return res.sendStatus(403);
    }
}

module.exports = isAuthenticated;