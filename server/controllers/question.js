const { getUser } = require('./user');
const supabase = require('../services/supabase').supabase;
const supabase_admin = require('../services/supabase').supabase_admin;

const getQuestions = async (req, res) => {
  let questions;
  const questionId = req.query?.id;
  try {
    const { data, error } = await supabase_admin.auth.admin.getUserById(
      res.locals.id
    );

    if (error) {
      throw error;
    }

    const user = await supabase
      .from('profile')
      .select('*')
      .eq('email', data.user.email)
      .limit(1);

    const size = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true });

    if (!questionId) {
      questions = await supabase
        .from('results')
        .select(
          `
          questions (
            *
          ),
          is_completed,
          likes
        `
        )
        .order('question_id', { ascending: true })
        .eq('profile_id', user.data[0].id);
    } else {
      questions = await supabase
        .from('results')
        .select(
          `
        questions (
          *
        ),
        is_completed,
        likes
        `
        )
        .order('question_id', { ascending: true })
        .eq('question_id', req.query.id)
        .eq('profile_id', user.data[0].id);
    }

    const results = questions.data.map((question) => {
      const { is_completed, likes, questions } = question;
      return {
        ...questions,
        is_completed,
        likes,
      };
    });

    if (questions.statusText !== 'OK') {
      throw questions.error;
    }

    const response = !questionId
      ? {
          data: results,
          pagination: null,
        }
      : {
          data: results,
          pagination: {
            next: Number(questionId) !== Number(size.count),
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
