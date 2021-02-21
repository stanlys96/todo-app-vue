const { verifyToken } = require('../helpers/jwt');

function authenticate(req, res, next) {
  try {
    let access_token = req.headers.access_token;
    let decoded = verifyToken(access_token);
    req.decoded = decoded;
    next();
  } catch(err) {
    next(err);
  }
}

module.exports = {
  authenticate
}