import React from 'react';

export default class LinkBtn extends React.Component {
	render() {
		return(
			<a href={this.props.address} title={this.props.title}>{this.props.icon} {this.props.pageTitle}</a>
		);
	}
}
