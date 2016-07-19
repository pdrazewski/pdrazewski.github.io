var React = require('react/addons');
var faker = require('faker');
var GroceryItem = require('./GroceryItem.jsx');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Superugly list of products to buy</h1>
				<div>
					{
						this.props.items.map(function(item,index){
							return (
								<GroceryItem item={item} key={"item"+index} />
							)
						})
					}
				</div>
			</div>
		)
	}
})