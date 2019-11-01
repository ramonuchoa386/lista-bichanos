import React from 'react';
import ListInfo from './list-info.js';
import Text from '../atoms/text.js';

export default class SearchInfo extends React.Component {
	render() {
		return(
			<div>
				<h3>Gato</h3>
				<Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet consequat ipsum. Vivamus suscipit erat id nisi porta, sed pellentesque nibh faucibus. Pellentesque nec turpis aliquet mauris sagittis pharetra nec sodales orci. Nullam et ante a ligula luctus placerat in in ligula." />
				<ListInfo />
			</div>
		);
	}
}

