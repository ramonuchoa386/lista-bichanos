import React from 'react';
import ListItem from './list-item.js';

export default class ListInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperaments: this.props.temperaments
		}
	}
	render() {
		const temperamentItems = this.state.temperaments.map((temperament) =>
			<ListItem ratingType={temperament.ratingType}
				  stars={temperament.stars}
				  icon='star_border' />
		);

		return(
			<ul>
				{ temperamentItems }
			</ul>
		);
	}
}


