import React from "react"

interface ILinkBtn {
	address: string
	title: string
	icon: React.ReactNode
	pageTitle: React.ReactNode
}

function LinkBtn(props: ILinkBtn) {
	const { address, title, icon, pageTitle } = props

	return (
		<a href={address} title={title}>
			{icon} {pageTitle}
		</a>
	)
}

export default LinkBtn
