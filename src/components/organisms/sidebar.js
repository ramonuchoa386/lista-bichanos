import React from 'react';
import LogoWrapper from '../molecules/logo-wrapper.js';
import Navigation from '../molecules/navigation.js';

export default class Sidebar extends React.Component {
	render() {
		return(
			<aside>
				<LogoWrapper />
				<Navigation />
			</aside>
		);
	}
}
