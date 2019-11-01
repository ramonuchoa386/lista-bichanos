import React from 'react';
import LinkBtn from '../atoms/link-btn.js';
import Icon from '../atoms/icon.js';

export default class Navigation extends React.Component {
	render() {
		return(
			<nav>
				<LinkBtn address='/breeds'
					 pageTitle='Breeds'
					 icon={<Icon icon="pets" />} />

				<LinkBtn address='/feedback'
					 pageTitle='Feedback'
					 icon={<Icon icon="announcement" />} />
			</nav>
		);
	}
}

