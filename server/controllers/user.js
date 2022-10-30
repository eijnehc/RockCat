const supabase = require('../services/supabase').supabase;
const orderSuccess = require('../controllers/transactions').orderSuccess;

const addUser = async (req, res) => {
  const { stripe_customer_id, customer, receipt_url } = await orderSuccess(
    req.query.session_id
  );

  try {
    const response = await supabase.from('profile').insert({
      email: customer.email,
      name: customer.name,
      stripe_customer_id: stripe_customer_id,
      receipt_url: receipt_url,
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

const getUser = async (req, res) => {
  const email = res.locals.email;

  try {
    const response = await supabase
      .from('profile')
      .select('*')
      .eq('email', email)
      .limit(1);

    if (response.statusText !== 'OK') {
      throw response.error;
    }

    res.status(200).send(response.data[0]);
  } catch (err) {
    res.status(400).send({
      message: err,
    });
  }
};

module.exports = {
  addUser,
  getUser,
  signIn,
};
