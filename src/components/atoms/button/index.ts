import * as React from "react"
import styled from "styled-components"

const Button = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
	border: none;
	background-color: transparent;
	color: ${(props) => props.theme.colors.slateGrey};
	font-size: ${(props) => props.theme.fontSizes.big};
	cursor: pointer;
`

export default Button
