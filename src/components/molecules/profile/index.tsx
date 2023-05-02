import * as React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { ProfileWrapper, ProfileButton, Avatar } from './styles';
import avatarImg from '../../../static/avatar.png';

function Profile() {
	return (
		<ProfileWrapper>
			<Avatar src={avatarImg} alt="My Avatar" width="40px" height="40px" />
			<ProfileButton
				type="button"
				onClick={() => window.alert('clicou na botao do perfil')}>
				<MdExpandMore />
			</ProfileButton>
		</ProfileWrapper>
	);
}

export default Profile;
