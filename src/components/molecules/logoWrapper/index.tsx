import * as React from 'react';
import FurFriendLogo from '../../../static/furFriend';
import * as S from './styles';

interface ILogoWrapper {
	icon: string;
	toggleSideBar: () => void;
}

function LogoWrapper(props: ILogoWrapper) {
	const { icon, toggleSideBar } = props;

	return (
		<S.LogoWrapper>
			<FurFriendLogo />
			<S.LogoName type="H1">Lista Bichanos</S.LogoName>
			<S.OpenProfileBtn type="button" onClick={toggleSideBar}>
				<S.OpenProfileBtnIcon icon={icon} />
			</S.OpenProfileBtn>
		</S.LogoWrapper>
	);
}

export default LogoWrapper;
