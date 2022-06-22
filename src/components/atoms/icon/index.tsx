import React from "react"

interface IIcon {
	icon: string
}

function Icon(props: IIcon) {
	const { icon } = props

	return <i className="material-icons">{icon}</i>
}

export default Icon
