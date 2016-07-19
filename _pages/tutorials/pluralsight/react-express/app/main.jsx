var React = require('react/addons');
var faker = require('faker');

console.log('hello from jsx')

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
	name: faker.name.findName()
}, {
	name: faker.name.findName()
}, {
	name: faker.name.findName(),
	purchased: true
},{
	name: faker.name.findName()
} ]


React.render(<GroceryItemList items={initial}/>, app)