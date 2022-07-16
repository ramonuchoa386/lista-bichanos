import * as React from 'react';
import {
	MdPets,
	MdFeedback,
	MdChevronLeft,
	MdChevronRight,
} from 'react-icons/md';
import { AnimatedLogo } from '../../atoms';
import * as S from './styles';

function Sidebar() {
	const [shrinkSideBar, setShrinkSideBar] = React.useState(false);

	const toggleSideBar = () => {
		setShrinkSideBar(!shrinkSideBar);
	};

	return (
		<S.CustomSideBar className={shrinkSideBar ? 'shrink' : ''}>
			<S.LogoWrapper>
				<AnimatedLogo />
				<S.LogoName>Lista Bichanos</S.LogoName>
			</S.LogoWrapper>
			<S.Navigation>
				<S.Link to="/">
					<MdPets /> <S.LinkText>Bichanos</S.LinkText>
				</S.Link>

				<S.Link to="/feedback">
					<MdFeedback /> <S.LinkText>Feedback</S.LinkText>
				</S.Link>
			</S.Navigation>
			<S.ToggleSideBarBtn type="button" onClick={toggleSideBar}>
				{!shrinkSideBar ? <MdChevronLeft /> : <MdChevronRight />}
			</S.ToggleSideBarBtn>
		</S.CustomSideBar>
	);
}

export default Sidebar;
