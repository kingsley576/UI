describe("index", function() {


	qs = {find: jasmine.createSpy()};
	res = {send: jasmine.createSpy(), status: jasmine.createSpy()};
	controller = require('./../controllers/index')(qs);

	describe("indexGetAll", function() {

		it('should call qs.find function', function() {
			controller.indexGetAll(res);
			expect(qs.find).toHaveBeenCalled();
		});
	});
});