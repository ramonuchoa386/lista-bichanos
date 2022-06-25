import * as React from "react"
import { BrowserRouter, Routes as R, Route } from "react-router-dom"
import * as Page from "../pages"

function Routes() {
	return (
		<BrowserRouter>
			<R>
				<Route path="/" element={<Page.FurListPage />} />
				<Route path="/feedback" element={<Page.FeedbackPage />} />
			</R>
		</BrowserRouter>
	)
}

export default Routes
