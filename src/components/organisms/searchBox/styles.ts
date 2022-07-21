import styled, { keyframes } from 'styled-components';
import { Button } from '../../atoms';
import { Result as ResultMol } from '../../molecules';

export const Result = styled(ResultMol)``;

export const SearchResultsWrapper = styled.section`
	background-color: white;
	border-left: 6px solid ${(props) => props.theme.colors.blue};
	margin: 50px;
	padding: 30px;
	color: ${(props) => props.theme.colors.darkGrey};
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

	@media only screen and (max-width: 520px) {
		overflow: scroll;
		margin: 20px;
		padding: 20px;
	}

	& > p {
		text-align: center;
		color: ${(props) => props.theme.colors.lightGrey};
	}
`;

export const SelectLabel = styled.label`
	display: flex;
	border-bottom: 4px dotted ${(props) => props.theme.colors.grey};
	padding-bottom: 30px;
	margin-bottom: 30px;
`;

export const SelectBox = styled.select`
	margin-left: 8px;
`;

export const SearchInput = styled.input`
	border-radius: 3px;
	border: 1px solid lightGrey;
	margin-left: 30px;
	width: 40%;
	height: 2.5rem;
	padding-left: 20px;

	@media only screen and (max-width: 520px) {
		margin-left: 0;
		margin-top: 30px;
		width: unset;
	}
`;

export const LoadMoreBtn = styled(Button)`
	margin: 0 auto;
	display: block;
	border: 1px solid lightgray;
	padding: 10px 35px;
	text-transform: uppercase;
	font-size: 1rem;
	color: black;
	border-radius: 3px;
`;

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
