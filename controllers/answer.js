var qs = require('../questions.json');

exports.GetOneQuestion = (req, res, next) => {
  var id = req.params.questionId;
  for (var i = 0; i < qs.categories.length; i++) {
    if (id === qs.categories[i].id) {
    return res.status(200).json({
      question: qs.categories[i]
    });
  }
}
}

exports.PostAnAnswer = ()