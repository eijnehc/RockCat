const supabase = require('../services/supabase').supabase;

const getQuestions = async (req, res) => {
  let questions;
  let count;
  const questionId = req.query?.id;
  try {
    data = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true });
    count = data.count;
    if (!questionId) {
      questions = await supabase
        .from('questions')
        .select('*', { count: 'exact' });
    } else {
      questions = await supabase
        .from('questions')
        .select('*', { count: 'exact' })
        .eq('id', req.query.id);
    }

    if (questions.statusText !== 'OK') {
      throw questions.error;
    }

    const response = !questionId
      ? {
          data: questions.data,
          pagination: null,
        }
      : {
          data: questions.data,
          pagination: {
            next: Number(questionId) !== Number(count),
            prev: Number(questionId) !== 1,
          },
        };

    res.status(200).send(response);
  } catch (err) {
    res.status(400).send({
      message: err,
    });
  }
};

module.exports = {
  getQuestions,
};
