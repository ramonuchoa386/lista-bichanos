import styled from 'styled-components';
import { Wrapper, Button, Icon } from '../../atoms';
import { Navigation as NavigationMol } from '../../molecules';

export const CustomSideBar = styled.aside`
	background-color: ${(props) => props.theme.colors.blue};
	padding: 10px 20px;

	&.shrink {
		section.logo-wrapper {
			img {
				display: none;
			}
		}

		nav {
			a {
				p {
					display: none;
				}
			}
		}
	}
`;

export const Navigation = styled(NavigationMol)``;

export const LogoWrapper = styled(Wrapper)`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	border-bottom: 4px dotted ${(props) => props.theme.colors.paleBlue};
	padding: 20px 0;
	margin-bottom: 40px;
`;

export const OpenProfileBtn = styled(Button)``;
export const OpenProfileBtnIcon = styled(Icon)``;
export const LogoName = styled.h1``;
