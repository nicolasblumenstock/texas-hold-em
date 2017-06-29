import React, { Component } from 'react';
import './App.css';
import PokerTable from './customComponents/PokerTable.js';

class App extends Component {
	render() {
		return (
			<div className="container-fluid">

				<PokerTable />

			</div>
		);
	}
}

export default App;
