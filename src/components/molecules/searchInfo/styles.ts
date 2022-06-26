import styled from 'styled-components';
import { Wrapper, Text, Heading } from '../../atoms';
import { Rating as RatingMol } from '..';

export const Rating = styled(RatingMol)``;
export const FurName = styled(Heading)``;
export const FurDesc = styled(Text)``;

export const SearchInfoWrapper = styled(Wrapper)`
	margin-left: 30px;

	@media only screen and (max-width: 520px) {
		margin-left: 0;
		margin-top: 30px;
	}
`;

export const RatingsList = styled.ul`
	list-style-type: none;
	margin: 30px 0 50px;
`;

export const RatingsListItem = styled.li`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	&:not(:last-of-type) {
		margin-bottom: 10px;
	}
`;

export const RatingName = styled(Text)`
	margin-right: 20px;
	width: 130px;

	@media only screen and (max-width: 520px) {
		width: 100px;
		font-size: 0.8rem;
	}
`;
