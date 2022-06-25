import * as React from "react"
import { Link, Icon, Text } from "../../atoms"

function Navigation() {
	return (
		<nav>
			<Link href="/breeds" title="Breeds">
				<Icon icon="pets" /> <Text>Breeds</Text>
			</Link>

			<Link href="/feedback" title="Feedback">
				<Icon icon="announcement" /> <Text>Feedback</Text>
			</Link>
		</nav>
	)
}

export default Navigation
