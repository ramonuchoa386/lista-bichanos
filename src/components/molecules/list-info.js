import React from 'react';
import ListItem from './list-item.js';

export default class ListInfo extends React.Component {
	render() {
		const stars = [1, 2, 3, 4, 5];

		return(
			<ul>
				<ListItem ratingType="Affection Level" stars={stars} icon='star_border' />
				<ListItem ratingType="Adaptability" stars={stars}  icon='star_border' />
				<ListItem ratingType="Child Friendly" stars={stars}  icon='star_border' />
				<ListItem ratingType="Dog Friendly" stars={stars}  icon='star_border' />
			</ul>
		);
	}
}


