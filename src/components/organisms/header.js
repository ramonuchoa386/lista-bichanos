import React from 'react';
import Profile from '../molecules/profile.js';

export default class Header extends React.Component {
	render() {
		return(
			<header>
				<h2>{this.props.pageTitle}</h2>
				<Profile />
			</header>
		);
	}
}
