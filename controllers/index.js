const qsController = function(qs) {
	const indexGetAll = (req, res, next) => {
  		  qs.find((err, data) => {
  		  	if (err) {
  		  		res.status(500);
  		  		res.send('Internal Server Error')
  		  	}
  		  	else {
  		  		res.status(200);
  		  		res.send(data);
  		  	}
  		  })
};
	return {
		indexGetAll:indexGetAll
	}
};

module.exports = qsController;

