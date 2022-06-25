import * as React from "react"
import { Img } from "../../atoms"
import { SearchInfo } from ".."

interface IResult {
	imageSrc: string
	alterText: string
	breedName: string
	breedDescription: string
	temperaments: Array<any>
}

function Result(props: IResult) {
	const { imageSrc, alterText, breedName, breedDescription, temperaments } =
		props

	return (
		<article>
			<Img
				src={imageSrc}
				width="200px"
				height="200px"
				alt={alterText}
				className="catThumb"
			/>
			<SearchInfo
				breedName={breedName}
				temperaments={temperaments}
				breedDescription={breedDescription}
			/>
		</article>
	)
}

export default Result
