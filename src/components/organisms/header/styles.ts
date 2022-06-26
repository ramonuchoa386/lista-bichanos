import styled from 'styled-components';
import { Profile as ProfileMol } from '../../molecules';
import { Heading as HeadingAtom } from '../../atoms';

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.colors.lightBlue};
	padding: 15px 30px 10px;
`;

export const Profile = styled(ProfileMol)``;

export const Heading = styled(HeadingAtom)`
	color: white;
`;
