const supabase = require('../services/supabase').supabase;
const orderSuccess = require('../controllers/transactions').orderSuccess;

const addUser = async (req, res) => {
  const session = await orderSuccess(req.query.session_id);
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
    res.status(400).send({
      message: err,
    });
  }
};

const signIn = async (req, res) => {
  const email = req.query.email;

  try {
    const { data } = await supabase
      .from('profile')
      .select('*')
      .eq('email', email)
      .limit(1);

    if (data.length > 0) {
      await supabase.auth.signInWithOtp({ email: email });
    } else {
      throw 'User not found';
    }

    res.status(200).send({ message: 'Magic link sent' });
  } catch (err) {
    res.status(400).send({
      message: err,
    });
  }
};

module.exports = {
  addUser,
  signIn,
};
