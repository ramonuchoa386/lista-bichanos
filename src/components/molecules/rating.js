import React from 'react';
import Icon from '../atoms/icon.js';

export default class Rating extends React.Component {
	constructor(props) {
		super(props);
		this.state = { stars: this.props.stars };
	}

	render() {
		const ratingStars = this.state.stars.map(() =>
			<Icon icon='star_border' />
		);

		return(
			<span>
				{ratingStars}
			</span>
		);
	}
}

