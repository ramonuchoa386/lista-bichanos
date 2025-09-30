import styled from "styled-components"

export const CustomSideBar = styled.aside`
	background-color: ${(props) => props.theme.colors.blue};
	padding: 10px 20px;

	section.logo-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		border-bottom: 4px dotted ${(props) => props.theme.colors.paleBlue};
		padding: 20px 0;
		margin-bottom: 40px;

		img {
			@media only screen and (max-width: 520px) {
				display: none;
			}
		}
	}

	nav {
		a {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			text-decoration: none;
			color: #abbcd0;
			font-size: 1.2rem;

			&:hover {
				color: white;
			}

			&:not(:last-of-type) {
				margin-bottom: 20px;
			}

			i {
				margin-right: 10px;
			}

			p {
				@media only screen and (max-width: 520px) {
					display: none;
				}
			}
		}
	}

	&.shrink {
		section.logo-wrapper {
			img {
				display: none;
			}
		}

		nav {
			a {
				p {
					display: none;
				}
			}
		}
	}
`
