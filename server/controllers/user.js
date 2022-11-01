const supabase = require('../services/supabase').supabase;
const supabase_admin = require('../services/supabase').supabase_admin;
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
  try {
    const { data, error } = await supabase_admin.auth.admin.getUserById(
      res.locals.id
    );

    if (error) {
      throw error;
    }

    const response = await supabase
      .from('profile')
      .select('*')
      .eq('email', data.user.email)
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

const updateUser = async (req, res) => {
  const { name, email, id } = req.body;

  try {
    const currentUser = await supabase.from('profile').select('*').eq('id', id);

    if (currentUser.data[0].name !== name) {
      await supabase.from('profile').update({ name: name }).eq('id', id);
    }

    if (currentUser.data[0].email !== email) {
      const { data, error } = await supabase_admin.auth.admin.updateUserById(
        res.locals.id,
        {
          email: email,
        }
      );
      if (error) {
        throw error;
      }
      await supabase.from('profile').update({ email: email }).eq('id', id);
    }

    res.status(200).send({ message: 'Profile updated' });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: 'Profile not updated',
    });
  }
};

module.exports = {
  addUser,
  getUser,
  signIn,
  updateUser,
};
