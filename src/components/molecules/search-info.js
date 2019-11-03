import React from 'react';
import ListInfo from './list-info.js';
import Text from '../atoms/text.js';
import BreedName from '../atoms/breed-name.js'

export default class SearchInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			breedName: this.props.breedName,
			breedDescription: this.props.breedDescription,
			temperaments: this.props.temperaments
		}
	}

	render() {
		return(
			<div>
				<BreedName breedName={this.state.breedName} />
				<Text text={this.state.breedDescription} />
				<ListInfo temperaments={this.state.temperaments} />
			</div>
		);
	}
}

