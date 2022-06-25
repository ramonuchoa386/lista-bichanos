import * as React from "react"
import { Button, Icon } from "../../atoms"
import FurFriendLogo from "../../../static/furFriend"

interface ILogoWrapper {
	icon: string
	toggleSideBar: () => void
}

function LogoWrapper(props: ILogoWrapper) {
	const { icon, toggleSideBar } = props

	return (
		<section className="logo-wrapper">
			<FurFriendLogo />
			<h1>Lista Bichanos</h1>
			<Button type="button" onClick={toggleSideBar}>
				<Icon icon={icon} />
			</Button>
		</section>
	)
}

export default LogoWrapper
