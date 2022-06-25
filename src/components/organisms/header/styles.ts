import styled from "styled-components"

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.colors.lightBlue};
	padding: 15px 30px 10px;

	h2 {
		color: white;
	}

	div.profile {
		display: flex;
		justify-content: space-between;
		align-items: center;

		img.avatar {
			border-radius: 50%;
			margin-right: 10px;
		}
	}
`
