import * as React from 'react';
import { BrowserRouter, Routes as R, Route } from 'react-router-dom';
import Pages from '../pages';

function Routes() {
	return (
		<BrowserRouter>
			<R>
				<Route path="/" element={<Pages.FurListPage />} />
				<Route path="/feedback" element={<Pages.FeedbackPage />} />
			</R>
		</BrowserRouter>
	);
}

export default Routes;
