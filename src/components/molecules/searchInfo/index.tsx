import * as React from 'react';
import * as S from './styles';

interface ISearchInfo {
	breedName?: string;
	breedDescription?: string;
	temperaments: Array<{
		ratingType?: string;
		stars?: number;
	}>;
}

function SearchInfo(props: ISearchInfo) {
	const { breedName, breedDescription, temperaments } = props;

	return (
		<S.SearchInfoWrapper>
			<S.FurName type="H3">{breedName}</S.FurName>
			<S.FurDesc>{breedDescription}</S.FurDesc>

			<S.RatingsList>
				{temperaments.map((temperament) => (
					<S.RatingsListItem key={`temperament-${Math.random()}`}>
						<S.RatingName>{temperament.ratingType}</S.RatingName>
						<S.Rating stars={temperament.stars} />
					</S.RatingsListItem>
				))}
			</S.RatingsList>
		</S.SearchInfoWrapper>
	);
}

export default SearchInfo;
