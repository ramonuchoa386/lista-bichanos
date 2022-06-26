import styled from 'styled-components';
import { Wrapper, Button, Icon, Heading } from '../../atoms';

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
export const LogoName = styled(Heading)``;
