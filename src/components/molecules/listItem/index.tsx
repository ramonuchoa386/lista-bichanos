import React from "react"
import { Text } from "../../atoms"
import { Rating } from ".."

interface IListItem {
	stars: Array<any>
	icon: string
	ratingType: string
}

function ListItem(props: IListItem) {
	const { stars, icon, ratingType } = props

	return (
		<li>
			<Text>{ratingType}</Text>
			<Rating stars={stars} icon={icon} />
		</li>
	)
}

export default ListItem
