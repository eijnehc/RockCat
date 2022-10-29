const checkout = require('../controllers/transactions').checkout;
const receipt = require('../controllers/transactions').receipt;

module.exports = (app) => {
  app.post('/api/v1/create-checkout-session', checkout);
  app.get('/api/v1/receipt', receipt);
};
