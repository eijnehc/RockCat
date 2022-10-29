const getQuestions = require('../controllers/question').getQuestions;

module.exports = (app) => {
  app.get('/api/v1/questions', getQuestions);
};
