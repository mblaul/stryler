import React, { Component } from 'react';
import './App.css';

import Stryler from './utils/stryler';

class App extends Component {
	render() {
		const sampleString = 'Lorem ipsum';

		return (
			<div className="App">
				<header className="App-header">
					<p>
						<Stryler
							string={sampleString}
							splitAt={[ 3, 6 ]}
							splitOn={' '}
							WrapperElements={[ 'span', 'div', 'span' ]}
							classNames={[ 'App-link', 'App-text', 'App-link' ]}
							styles={[ { fontSize: 36 }, { transform: 'rotate(90deg)' } ]}
						/>
					</p>
				</header>
			</div>
		);
	}
}

export default App;
