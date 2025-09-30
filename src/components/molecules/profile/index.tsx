import * as React from "react"
import { Icon } from "../../atoms"
import { ProfileWrapper, ProfileButton, Avatar } from "./styles"
import avatarImg from "../../../static/avatar.png"

function Profile() {
	return (
		<ProfileWrapper>
			<Avatar
				src={avatarImg}
				alt="My Avatar"
				width="40px"
				height="40px"
				className="avatar"
			/>
			<ProfileButton
				type="button"
				onClick={() => window.alert("clicou na botao do perfil")}
			>
				<Icon icon="expand_more" />
			</ProfileButton>
		</ProfileWrapper>
	)
}

export default Profile
