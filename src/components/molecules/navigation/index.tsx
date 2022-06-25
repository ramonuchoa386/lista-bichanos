import * as React from "react"
import { Link } from "react-router-dom"
import { Icon, Text } from "../../atoms"

function Navigation() {
	return (
		<nav>
			<Link to="/">
				<Icon icon="pets" /> <Text>Breeds</Text>
			</Link>

			<Link to="/feedback">
				<Icon icon="announcement" /> <Text>Feedback</Text>
			</Link>
		</nav>
	)
}

export default Navigation
