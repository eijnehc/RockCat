const initStripe = require('stripe');

const STRIPE_KEY =
  'sk_test_51LqtYuIwH8bO08yNtcROZ97p1fRFCeZQhakkeBWtwSisoVMcd83R8dLIf4ISX840Q0l4GdJVAT2zycLUEHab39dS00AQ6m5TK1';

const stripe = initStripe(STRIPE_KEY);

module.exports = { stripe };
