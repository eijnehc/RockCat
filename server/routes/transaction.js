const checkout = require('../controllers/transactions').checkout;

module.exports = (app) => {
  app.post('/api/v1/create-checkout-session', checkout);
};
