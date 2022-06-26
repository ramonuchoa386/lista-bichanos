import styled from 'styled-components';

export const AppWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
`;

export const Main = styled.main`
	background-color: ${(props) => props.theme.colors.grey};
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	width: 100%;
`;
