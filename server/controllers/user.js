const stripe = require('../services/stripe').stripe;
const supabase = require('../services/supabase').supabase;

const addUser = async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = session.customer_details;

  try {
    await supabase.from('profile').insert({
      email: customer.email,
      name: customer.name,
      stripe_customer: req.query.session_id,
      is_subscribed: true,
    });

    res.status(200).send({ message: 'Customer Added' });
  } catch (err) {
    res.status(400).send(json(err));
  }
};

module.exports = {
  addUser,
};
