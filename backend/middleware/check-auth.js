const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.body.token.split(' ')[1];
  if (!token) {
    return res.status(401).json({ msg: 'access denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Auth failed' });
  }
};
