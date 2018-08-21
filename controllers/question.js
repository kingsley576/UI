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


exports.postQuestion = (req, res, next) => {
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

exports.PostAnAnswer = (req, res, next) => {
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
