import React, { Component } from 'react';
import CatComponent from './CatComponent';
import MouseComponent from './MouseComponent';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<MouseComponent />
				<GraceHopperQuoteComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
