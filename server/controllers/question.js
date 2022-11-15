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
          result_id,
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
        result_id,
        is_completed,
        likes
        `
        )
        .order('question_id', { ascending: true })
        .eq('question_id', req.query.id)
        .eq('profile_id', user.data[0].id);
    }

    const results = questions.data.map((question) => {
      const { result_id, is_completed, likes, questions } = question;

      return {
        question_id: result_id,
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

const completeQuestion = async (req, res) => {
  const id = req.body.questionId;

  try {
    const { error } = await supabase
      .from('results')
      .update({ is_completed: true })
      .eq('result_id', id);

    if (error) {
      throw error;
    }

    res.status(200).send({ message: 'Question completed' });
  } catch (err) {
    res.status(400).send({
      message: err,
    });
  }
};

const likeQuestion = async (req, res) => {
  const id = req.body.questionId;
  const likes = req.body.likes;

  try {
    if (likes < 5) {
      const { error } = await supabase
        .from('results')
        .update({ likes: likes + 1 })
        .eq('result_id', id);

      if (error) {
        throw error;
      }
    } else {
      throw 'You have reach the maximum number of likes';
    }

    res.status(200).send({ message: 'Like +1' });
  } catch (err) {
    res.status(400).send({
      message: err,
    });
  }
};

module.exports = {
  getQuestions,
  completeQuestion,
  likeQuestion,
};
