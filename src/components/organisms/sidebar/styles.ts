import styled from 'styled-components';
import {
	LogoWrapper as LogoWrapperMol,
	Navigation as NavigationMol,
} from '../../molecules';

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

export const LogoWrapper = styled(LogoWrapperMol)``;
export const Navigation = styled(NavigationMol)``;
