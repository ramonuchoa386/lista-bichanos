import React from 'react';

export default class Img extends React.Component {
	render() {
		return(
			<img src={this.props.imageSrc} alt={this.props.alterText} width={this.props.width} height={this.props.height} className={this.props.className} />
		);
	}
}
