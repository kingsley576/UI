const qsController = function(qs) {
  const GetOneQuestion = (req, res, next) => {
  var id = req.params.questionId;
  for (var i = 0; i < qs.categories.length; i += 1) {
    if (id === qs.categories[i].id) {
      return res.status(200).json({
        question: qs.categories[i]
      });
    }
  }
};

const PostAnAnswer = (req, res, next) => {
  const ansr = {
    username: req.body.username,
    gender: req.body.gender,
    id: req.body.id,
    answer: req.body.answer

  };
  res.status(201).json({
    message: 'POSTED AN ANSWER',
    question: qs.categories[2].question,
    answer: ansr.answer
  });
 };
    return {
        GetOneQuestion: GetOneQuestion,
        PostAnAnswer: PostAnAnswer
    }

};

module.exports = qsController;

