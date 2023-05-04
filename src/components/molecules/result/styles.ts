import styled from 'styled-components';
import { Wrapper } from '../../atoms';

export const ResultsWrapper = styled(Wrapper)`
	display: flex;
	align-items: flex-start;
	margin-top: 30px;

	@media only screen and (max-width: 520px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const ResultThumbnail = styled.img`
	min-width: 200px;
	height: auto;
`;
