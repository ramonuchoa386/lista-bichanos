import * as React from 'react';
import { SearchInfo } from '..';
import { ResultsWrapper, ResultThumbnail } from './styles';

interface IResult {
	imageSrc: string;
	alterText: string;
	breedName: string;
	breedDescription: string;
	temperaments: Array<any>;
}

function Result(props: IResult) {
	const { imageSrc, alterText, breedName, breedDescription, temperaments } =
		props;

	return (
		<ResultsWrapper>
			<ResultThumbnail
				src={imageSrc}
				width="200px"
				height="200px"
				alt={alterText}
			/>
			<SearchInfo
				breedName={breedName}
				temperaments={temperaments}
				breedDescription={breedDescription}
			/>
		</ResultsWrapper>
	);
}

export default Result;
