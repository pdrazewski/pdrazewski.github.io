import React, { Component } from 'react';

import Accounts from './accounts';

class Header extends Component {
	render() {
		return (
			<header>
				<a>Logo</a>
				<Accounts />
				<a> Create Bin </a>
			</header>
		);
	}
}

export default Header;