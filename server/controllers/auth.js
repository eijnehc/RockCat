const authMiddleware = async (req, res, next) => {
  const sessionToken = req.headers.sessionToken;

  supabase
    .auth({ session_token: sessionToken })
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(401), json(err);
    });
};

module.exports = {
  authMiddleware,
};
