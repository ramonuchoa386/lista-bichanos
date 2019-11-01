import React from 'react';
import Img from '../atoms/img.js';
import Button from '../atoms/button.js';
import avatar from '../../static/avatar.png';
import Icon from '../atoms/icon.js';

export default class Profile extends React.Component {
	render() {
		return(
			<div className="profile">
				<Img imageSrc={avatar} alterText='My Avatar' width='40px' height='40px' className='avatar' />
				<Button btnContent={<Icon icon="expand_more" />} />
			</div>
		);
	}
}

