import * as React from 'react';
import * as S from './styles';

function Sidebar() {
	const [shrinkSideBar, setShrinkSideBar] = React.useState(false);

	const toggleSideBar = () => {
		setShrinkSideBar(!shrinkSideBar);
	};

	return (
		<S.CustomSideBar className={shrinkSideBar ? 'shrink' : ''}>
			<S.LogoWrapper
				icon={!shrinkSideBar ? 'chevron_left' : 'chevron_right'}
				toggleSideBar={toggleSideBar}
			/>
			<S.Navigation />
		</S.CustomSideBar>
	);
}

export default Sidebar;
