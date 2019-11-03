import React from 'react';
import LogoWrapper from '../molecules/logo-wrapper.js';
import Navigation from '../molecules/navigation.js';

export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shrinkSideBar: true
		}
	}

	toggleSideBar = function() {
		this.setState({ shrinkSideBar: !this.state.shrinkSideBar });
	}

	render() {
		return(
			<aside shrinkSideBar={this.state.shrinkSideBar}>
				<LogoWrapper icon="chevron_left" toggleSideBar={this.toggleSideBar} />
				<Navigation />
			</aside>
		);
	}
}
