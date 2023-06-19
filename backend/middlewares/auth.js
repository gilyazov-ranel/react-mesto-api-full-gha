/* eslint-disable import/newline-after-import */
/* eslint-disable consistent-return */

const jwt = require('jsonwebtoken');
const { Unauthorized } = require('../errors/collectionOfErrors');

const jwtSecret = process.env.JWT_SECRET;
const nodeEnv = process.env.NODE_ENV;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new Unauthorized('Необходима авторизация!'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, nodeEnv === 'production' ? jwtSecret : 'dev-secret');
  } catch (err) {
    return next(new Unauthorized('Необходима авторизация!'));
  }

  req.user = payload;

  next();
};
