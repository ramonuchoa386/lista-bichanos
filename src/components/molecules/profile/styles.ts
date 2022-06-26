import styled from 'styled-components';
import { Button, Img } from '../../atoms';

export const ProfileWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	aling-items: center;
`;

export const ProfileButton = styled(Button)``;

export const Avatar = styled(Img)`
	border-radius: 50%;
	margin-right: 10px;
`;
