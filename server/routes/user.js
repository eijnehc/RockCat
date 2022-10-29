const addUser = require('../controllers/user').addUser;

module.exports = (app) => {
  app.post('/api/v1/sign-up', addUser);
};
