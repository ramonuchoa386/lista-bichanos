import React from 'react';

export default class LinkBtn extends React.Component {
	render() {
		return(
			<a href={this.props.address}>{this.props.icon} {this.props.pageTitle}</a>
		);
	}
}
