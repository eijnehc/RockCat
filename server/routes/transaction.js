const checkout = require('../controllers/transactions').checkout;
const orderSuccess = require('../controllers/transactions').orderSuccess;

module.exports = (app) => {
  app.post('/api/v1/create-checkout-session', checkout);
  app.get('/api/v1/order/success', orderSuccess);
};
