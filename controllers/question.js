qsController = function(qs) {
    const postQuestion = (req, res, next) => {
      const qstn = {
        username: req.body.username,
        gender: req.body.gender,
        id: req.body.id,
        title: req.body.title,
        question: req.body.question

      };
      res.status(201).json({
        message: 'POSTED A QUESTION',
        question: qstn
      });
    };
  return {
      postQuestion: postQuestion
  }
}

module.exports = qsController;
