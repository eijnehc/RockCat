const jwt_decode = require('jwt-decode');

const verifyToken = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(403).send('A token is required for authentication');
  }

  try {
    const decoded = jwt_decode(accessToken);
    if (decoded.aud !== 'authenticated') {
      throw 'User not authenticated';
    }
    res.locals.id = decoded.sub;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }

  next();
};

module.exports = {
  verifyToken,
};
