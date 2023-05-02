import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Loader = styled.div<{ showLoader: boolean }>`
	width: 30px;
	height: 30px;
	border-radius: 30px;
	border: 2px solid black;
	border-bottom-color: transparent;
	margin: 0 auto;
	animation: 1s ${rotate} cubic-bezier(0.4, 0, 0.2, 1) infinite;
	display: ${(props) => (props.showLoader ? 'block' : 'none')};
`;
