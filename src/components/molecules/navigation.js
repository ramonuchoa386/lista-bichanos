import React from 'react';
import LinkBtn from '../atoms/link-btn.js';
import Icon from '../atoms/icon.js';
import Text from '../atoms/text.js';

export default class Navigation extends React.Component {
	render() {
		return(
			<nav>
				<LinkBtn address='/breeds'
					 pageTitle={<Text text="Breeds"/>}
					 icon={<Icon icon="pets" />}
					 title="Breeds" />

				<LinkBtn address='/feedback'
					 pageTitle={<Text text="Feedback"/>}
					 icon={<Icon icon="announcement" />}
					 title="Feedback" />
			</nav>
		);
	}
}

