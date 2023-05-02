/* eslint-disable camelcase */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { SearchInfo } from '..';
import { ResultsWrapper, ResultThumbnail } from './styles';
import useFetchBreedDetails from '../../../hooks/useFetchBreedDetails';
import { Loader } from '../../atoms';

interface IResult {
	breedId: string;
}

const Result: FunctionComponent<IResult> = (props) => {
	const { breedId } = props;
	const { loading, data, error } = useFetchBreedDetails(breedId);
	const [breedName, setBreedName] = useState<string>('');
	const [breedDesc, setBreedDesc] = useState<string>('');
	const [affectionLevel, setAffectionLevel] = useState<number>(0);
	const [adapt, setAdapt] = useState<number>(0);
	const [childFriendly, setChildFriendly] = useState<number>(0);
	const [dogFriendly, setDogFriendly] = useState<number>(0);

	useEffect(() => {
		if (!loading && data !== undefined && error === undefined) {
			const {
				name,
				description,
				affection_level,
				adaptability,
				child_friendly,
				dog_friendly,
			} = data;

			setBreedName(name);
			setBreedDesc(description);
			setAffectionLevel(affection_level);
			setAdapt(adaptability);
			setChildFriendly(child_friendly);
			setDogFriendly(dog_friendly);
		}
	}, [loading, data, error, breedId]);

	if (loading) {
		return <Loader showLoader={loading} />;
	}

	return (
		<ResultsWrapper>
			<ResultThumbnail src="" width="200px" height="200px" alt="" />
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
