const getQuestions = require('../controllers/question').getQuestions;
const completeQuestion = require('../controllers/question').completeQuestion;
const verifyToken = require('../controllers/auth').verifyToken;

module.exports = (app) => {
  app.get('/api/v1/questions', verifyToken, getQuestions);
  app.post('/api/v1/complete-question', verifyToken, completeQuestion);
};
