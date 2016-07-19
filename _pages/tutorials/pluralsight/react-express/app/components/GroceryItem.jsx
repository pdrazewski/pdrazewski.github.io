var React = require('react/addons');
var faker = require('faker');
module.exports = React.createClass({
	render: function(){
		return (
			<h4 className={this.props.item.purchased ? 'strikethrough': ""} >{this.props.item.name}</h4>
		)
	}
})

