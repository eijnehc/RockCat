const getQuestions = require('../controllers/question').getQuestions;
const verifyToken = require('../controllers/auth').verifyToken;

module.exports = (app) => {
  app.get('/api/v1/questions', verifyToken, getQuestions);
};
