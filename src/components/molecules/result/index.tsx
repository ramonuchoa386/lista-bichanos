import React, { FunctionComponent, useContext } from 'react';
import { SearchInfo } from '..';
import { ResultsWrapper, ResultThumbnail } from './styles';
import BreedIdContext from '../../../context/breedId';

const Result: FunctionComponent = () => {
	const {
		breedName,
		breedDesc,
		imgUrl,
		affectionLevel,
		adapt,
		childFriendly,
		dogFriendly,
	} = useContext(BreedIdContext);

	return (
		<ResultsWrapper>
			<ResultThumbnail
				src={imgUrl}
				width="200px"
				height="200px"
				alt={`Foto do ${breedName}`}
			/>
			<SearchInfo
				breedName={breedName}
				temperaments={[
					{
						ratingType: 'Affection Level',
						stars: affectionLevel,
					},
					{
						ratingType: 'Adaptability',
						stars: adapt,
					},
					{
						ratingType: 'Child Friendly',
						stars: childFriendly,
					},
					{
						ratingType: 'Dog Friendly',
						stars: dogFriendly,
					},
				]}
				breedDescription={breedDesc}
			/>
		</ResultsWrapper>
	);
};

export default Result;
