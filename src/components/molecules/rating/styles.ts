import styled from 'styled-components';
import { Icon } from '../../atoms';

export const RatingWrapper = styled.span``;

export const RatingIcon = styled(Icon)`
	color: ${(props) => props.theme.colors.paleGrey};

	@media only screen and (max-width: 520px) {
		font-size: 0.8rem;
	}

	&.starRated {
		color: ${(props) => props.theme.colors.starRated};
	}
`;
