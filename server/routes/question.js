const getQuestions = require('../controllers/question').getQuestions;
const completeQuestion = require('../controllers/question').completeQuestion;
const likeQuestion = require('../controllers/question').likeQuestion;
const verifyToken = require('../controllers/auth').verifyToken;

module.exports = (app) => {
  app.get('/api/v1/questions', verifyToken, getQuestions);
  app.post('/api/v1/complete-question', verifyToken, completeQuestion);
  app.post('/api/v1/question/like', verifyToken, likeQuestion);
};
