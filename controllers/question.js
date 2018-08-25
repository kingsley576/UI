const qs = require('../questions.json');

exports.questionGetAll = (req, res, next) => {
  res.status(200).json({
    questions: qs.categories
  });
};