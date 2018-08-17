var qs = require('../questions.json');

exports.indexGetAll = (req, res, next) => {
  res.status(200).json({
    questions: qs.categories
  });
}
