import * as React from "react"
import { Icon } from "../../atoms"

interface IRating {
	stars: Array<any>
	icon: string
}

function Rating(props: IRating) {
	const { stars, icon } = props

	return (
		<span>
			{stars.map((star) => (
				<Icon key={`star-${star}-${Math.random()}`} icon={icon} />
			))}
		</span>
	)
}

export default Rating
