const qs = require('../questions.json');

exports.questionGetAll = (req, res, next) => {
  res.status(200).json({
    questions: qs.categories
  });
};

exports.GetOneQuestion = (req, res, next) => {
  var id = req.params.questionId;
  for (var i = 0; i < qs.categories.length; i++) {
    if (id === qs.categories[i].id) {
      return res.status(200).json({
        question: qs.categories[i]
      });
    }
  }
};