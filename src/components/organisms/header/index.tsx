import * as React from "react"
import { Profile } from "../../molecules"
import { Header as CustomHeader } from "./styles"

interface IHeader {
	pageTitle: string
}

function Header(props: IHeader) {
	const { pageTitle } = props

	return (
		<CustomHeader>
			<h2>{pageTitle}</h2>
			<Profile />
		</CustomHeader>
	)
}

export default Header
