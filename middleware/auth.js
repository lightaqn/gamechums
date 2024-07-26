const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  // Seek token
  if (!token)
    return res.status(401).json({ msg: "Blank token, access denied" });
  try {
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Add user from payload
    req.user = decoded;
    next();
  } catch (err) {
      res.status(400).json({ msg: "Invalid token" })
  }
}

module.exports = auth;
