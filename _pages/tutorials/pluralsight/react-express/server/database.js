var mongoose = require('mongoose');
var faker = require('faker');
var GroceryItem = require('./models/GroceryItem.js');


mongoose.connect('mongodb://localhost/grocery', function(){
	console.log('conntected');

	mongoose.connection.db.dropDatabase();

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

	items.forEach(function(item){
		new GroceryItem(item).save();
	})

})