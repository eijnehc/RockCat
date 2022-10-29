const addUser = require('../controllers/user').addUser;
const signIn = require('../controllers/user').signIn;
const getUser = require('../controllers/user').getUser;
const verifyToken = require('../controllers/auth').verifyToken;

module.exports = (app) => {
  app.post('/api/v1/sign-up', addUser);
  app.get('/api/v1/sign-in', signIn);
  app.get('/api/v1/user', verifyToken, getUser);
};
