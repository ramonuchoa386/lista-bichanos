import * as React from "react"
import { Rating } from ".."
import { Text, Heading } from "../../atoms"

interface ISearchInfo {
	breedName: string
	breedDescription: string
	temperaments: Array<any>
}

function SearchInfo(props: ISearchInfo) {
	const { breedName, breedDescription, temperaments } = props

	return (
		<div>
			<Heading type="H3">{breedName}</Heading>
			<Text>{breedDescription}</Text>

			<ul>
				{temperaments.map((temperament) => (
					<li key={`temperament-${Math.random()}`}>
						<Text>{temperament.ratingType}</Text>
						<Rating stars={temperament.stars} icon="star_border" />
					</li>
				))}
			</ul>
		</div>
	)
}

export default SearchInfo
