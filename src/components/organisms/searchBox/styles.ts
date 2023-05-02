import styled from 'styled-components';
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
