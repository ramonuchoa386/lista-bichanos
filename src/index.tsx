import * as React from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import GlobalStyles from "./styles/global"
import App from "./App"

const container = document.getElementById("root")
const root = createRoot(container!) // createRoot(container!) if you use TypeScript

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
