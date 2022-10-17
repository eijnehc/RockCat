const express = require('express');
const initStripe = require('stripe');
const cors = require('cors');

const app = express();
const PORT = 8000;
const CLIENT_PORT = 5173;
const PRICE_ID = 'price_1LqwRHIwH8bO08yN5SDxo6ZX';

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const stripe = initStripe(
  'sk_test_51LqtYuIwH8bO08yNtcROZ97p1fRFCeZQhakkeBWtwSisoVMcd83R8dLIf4ISX840Q0l4GdJVAT2zycLUEHab39dS00AQ6m5TK1'
);

app.post('/api/v1/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: PRICE_ID,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:${CLIENT_PORT}/welcome?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:${CLIENT_PORT}/welcome`,
  });

  res.redirect(303, session.url);
});

app.get('/api/v1/order/success', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.status(200).send(session.customer_details);
});

app.listen(PORT, () => {
  console.log('Server is running');
});
