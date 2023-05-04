import React, { FunctionComponent } from 'react';
import { MdStarBorder, MdStar } from 'react-icons/md';
import { RatingWrapper } from './styles';

export interface IRating {
	stars?: number;
}

const Rating: FunctionComponent<IRating> = (props) => {
	const { stars } = props;

	return (
		<RatingWrapper>
			{new Array(5)
				.fill(0)
				.fill(1, 0, stars)
				.map((star) => (star === 1 ? <MdStar /> : <MdStarBorder />))}
		</RatingWrapper>
	);
};

export default Rating;
