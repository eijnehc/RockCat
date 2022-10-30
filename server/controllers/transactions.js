const stripe = require('../services/stripe').stripe;

const CLIENT_PORT = 5173;
const PRICE_ID = 'price_1LqwRHIwH8bO08yN5SDxo6ZX';

const checkout = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: PRICE_ID,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:${CLIENT_PORT}/login?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:${CLIENT_PORT}/welcome?canceled=true`,
  });

  res.redirect(303, session.url);
};

const orderSuccess = async (session_id) => {
  const session = await stripe.checkout.sessions.retrieve(session_id);

  const charges = await stripe.charges.list({
    payment_intent: session.payment_intent,
  });

  return {
    stripe_customer_id: session.id,
    customer: session.customer_details,
    receipt_url: charges.data[0].receipt_url,
  };
};

module.exports = {
  checkout,
  orderSuccess,
};
