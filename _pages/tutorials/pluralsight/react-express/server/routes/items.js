var faker = require('faker');
module.exports = function (app) {
	var items = [{
		name: faker.name.findName()
	}, {
		name: faker.name.findName()
	}, {
		name: faker.name.findName(),
		purchased: true
	},{
		name: faker.name.findName()
	}];

	app.route('/api/items')
	.get(function(req, res){
		res.send(items)
	})
	.post(function(req, res){
		var item = req.body;
		items.push(item);
	})
}
