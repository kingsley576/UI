describe("index", function() {


	qs = {res: jasmine};
	res = {json: {json: jasmine, status: jasmine}};
	controller = require('./../controllers/index')(qs);

	describe("indexGetAll", function() {

		it('should call res', function() {
			controller.indexGetAll(res);
			expect(res).toHaveBeenCalled();
		});
	});
});