import * as React from 'react';
import * as S from './styles';
import FurFriendLogo from '../../../static/furFriend';

function Sidebar() {
	const [shrinkSideBar, setShrinkSideBar] = React.useState(false);

	const toggleSideBar = () => {
		setShrinkSideBar(!shrinkSideBar);
	};

	return (
		<S.CustomSideBar className={shrinkSideBar ? 'shrink' : ''}>
			<S.LogoWrapper>
				<FurFriendLogo />
				<S.LogoName>Lista Bichanos</S.LogoName>
				<S.OpenProfileBtn type="button" onClick={toggleSideBar}>
					<S.OpenProfileBtnIcon
						icon={!shrinkSideBar ? 'chevron_left' : 'chevron_right'}
					/>
				</S.OpenProfileBtn>
			</S.LogoWrapper>
			{/* <S.LogoWrapper
				icon={!shrinkSideBar ? 'chevron_left' : 'chevron_right'}
				toggleSideBar={toggleSideBar}
			/> */}
			<S.Navigation />
		</S.CustomSideBar>
	);
}

export default Sidebar;
