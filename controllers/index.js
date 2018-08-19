const qsController = function(qs) {
	const indexGetAll = (req, res, next) => {
  	res.status(200).json({
    questions: qs.categories
  });
};
	return {
		indexGetAll:indexGetAll
	}
};

module.exports = qsController;

