import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Icon, Text } from '../../atoms';

export const Navigation = styled.nav``;

export const Link = styled(RouterLink)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-decoration: none;
	color: #abbcd0;
	font-size: 1.2rem;

	&:hover {
		color: white;
	}

	&:not(:last-of-type) {
		margin-bottom: 20px;
	}
`;

export const LinkIcon = styled(Icon)`
	margin-right: 10px;
`;

export const LinkText = styled(Text)`
	display: none;
	@media only screen and (min-width: ${(props) =>
			props.theme.breakpoints.tablet}) {
		display: block;
	}
`;
