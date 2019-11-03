import React from 'react';
import Button from '../atoms/button.js';
import Img from '../atoms/img.js';
import Icon from '../atoms/icon.js';
import logo from '../../static/marca-hostgatos.svg';

export default class LogoWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			icon: this.props.icon
		}
	}
	render() {
		return(
			<section className="logo-wrapper">
				<Img imageSrc={logo} alterText='Hostgatos' width='250px' height='66px' />
				<Button btnContent={<Icon icon={this.state.icon} />} onClick={this.props.toggleSideBar} />
			</section>
		);
	}
}

