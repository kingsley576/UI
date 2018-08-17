var qs = require('../questions.json');

exports.indexGetAll = (req, res) => {
  res.status(200).json({
    questions: qs.categories
  });
}
