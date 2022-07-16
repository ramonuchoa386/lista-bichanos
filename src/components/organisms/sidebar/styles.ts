import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Text, Wrapper, Button } from '../../atoms';

export const CustomSideBar = styled.aside`
	background-color: ${(props) => props.theme.colors.blue};
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	&.shrink {
		section {
			p {
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

export const LogoWrapper = styled(Wrapper)`
	display: flex;
	align-items: center;
	border-bottom: 4px dotted ${(props) => props.theme.colors.paleBlue};
	padding-bottom: 20px;
	margin-bottom: 20px;
`;

export const LogoName = styled.p`
	font-weight: bold;
	margin-left: 8px;
	color: ${(props) => props.theme.colors.white};
`;

export const Navigation = styled.nav``;

export const Link = styled(RouterLink)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-decoration: none;
	color: ${(props) => props.theme.colors.offWhite};

	&:hover {
		color: ${(props) => props.theme.colors.white};
	}

	&:not(:last-of-type) {
		margin-bottom: 20px;
	}
`;

export const LinkText = styled(Text)`
	margin-left: 8px;
	line-height: 1rem;
`;

export const ToggleSideBarBtn = styled(Button)`
	width: 100%;
	margin-top: auto;
	font-size: 1rem;
	border-top: 4px dotted ${(props) => props.theme.colors.paleBlue};
	padding-top: 20px;
	text-align: left;
`;
