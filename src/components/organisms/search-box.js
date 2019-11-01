import React from 'react';
import Button from '../atoms/button.js';
import Result from '../molecules/result.js';

export default class SearchBox extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			imageSrc: "https://placekitten.com/200/200",
			alterText: "Gato"
		}
	}

	render() {
		return(
			<section className='search-box'>
				<label for='search'>
					Search the breed: <input type='search' id='search' />
				</label>
				<p>found</p>
				<Result imageSrc={this.state.imageSrc} alterText={this.state.alterText} />
				<Button btnContent='Load more' className="load-more" />
			</section>
		);
	}
}
