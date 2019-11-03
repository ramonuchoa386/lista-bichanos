import React from 'react';
import Img from '../atoms/img.js';
import SearchInfo from '../molecules/search-info.js';

export default class Result extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageSrc: this.props.imageSrc,
			alterText: this.props.alterText,
			breedName: this.props.breedName,
			breedDescription: this.props.breedDescription,
			temperaments: this.props.temperaments
		}
	}

	render() {
		return(
			<article>
				<Img imageSrc={this.state.imageSrc} width="200px" height="200px" alterText={this.state.alterText} className="catThumb" />
				<SearchInfo breedName={this.state.breedName}
					    temperaments={this.state.temperaments}
					    breedDescription={this.state.breedDescription} />
			</article>
		);
	}
}
