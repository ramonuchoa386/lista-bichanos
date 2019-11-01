import React from 'react';

export default class Button extends React.Component {
	render() {
		return(
			<button type='button' onClick={this.props.btnAction} className={this.props.className}>{this.props.btnContent}</button>
		);
	}
}
