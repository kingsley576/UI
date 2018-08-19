describe("index", function() {


	qs = {res: jasmine};
	res = {json: jasmine, status: 200};
	controller = require('./../controllers/index')(qs);

	describe("indexGetAll", function() {

		it('should call res.status.json', function() {
			controller.indexGetAll(res);
			expect(res).toHaveBeenCalled();
		});
	});
});