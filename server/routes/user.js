const addUser = require('../controllers/user').addUser;
const signIn = require('../controllers/user').signIn;

module.exports = (app) => {
  app.post('/api/v1/sign-up', addUser);
  app.get('/api/v1/sign-in', signIn);
};
