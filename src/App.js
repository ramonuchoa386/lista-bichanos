import React from 'react';
import Sidebar from './components/organisms/sidebar.js';
import Header from './components/organisms/header.js';
import Search from './components/organisms/search-box.js';

import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Sidebar />
				<main>
					<Header pageTitle='Breeds' />
					<Search />
				</main>
			</div>
		);
	}
}
