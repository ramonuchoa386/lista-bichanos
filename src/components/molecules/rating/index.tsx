import * as React from 'react';
import { RatingWrapper, RatingIcon } from './styles';

interface IRating {
	stars: Array<any>;
	icon: string;
}

function Rating(props: IRating) {
	const { stars, icon } = props;

	return (
		<RatingWrapper>
			{stars.map((star) => (
				<RatingIcon key={`star-${star}-${Math.random()}`} icon={icon} />
			))}
		</RatingWrapper>
	);
}

export default Rating;
