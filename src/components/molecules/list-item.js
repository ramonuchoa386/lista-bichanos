import React from 'react';
import Text from '../atoms/text.js';
import Rating from './rating.js';

export default class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stars: this.props.stars,
			icon: this.props.icon
		}
	}

	render() {
		return(
			<li>
				<Text text={this.props.ratingType} />
				<Rating stars={this.state.stars} icon={this.state.icon} />
			</li>
		);
	}
}
