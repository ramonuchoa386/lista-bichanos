import * as React from 'react';
import Routes from './routes';
import GlobalContext from './context';

function App() {
	return (
		<GlobalContext>
			<Routes />
		</GlobalContext>
	);
}

export default App;
