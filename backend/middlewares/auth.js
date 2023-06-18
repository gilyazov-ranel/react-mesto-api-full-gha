/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Unauthorized } = require('../errors/collectionOfErrors');

const { JWT_SECRET } = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new Unauthorized('Необходима авторизация!'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new Unauthorized('Необходима авторизация!'));
  }

  req.user = payload;

  next();
};
