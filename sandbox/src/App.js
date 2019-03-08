import React, { Component } from 'react';
import './App.css';

import Stryler from './utils/stryler';

class App extends Component {
	render() {
		const sampleString = `Lorem Ipsum`;

		return (
			<div className="App">
				<header className="App-header">
					<div>
						<Stryler
							string={sampleString}
							splitAt={[ 3, 6 ]}
							WrapperElements={[ 'span', 'div', 'span' ]}
							classNames={[ 'App-link', 'App-text', 'App-link' ]}
							styles={[ { fontSize: 36 }, { transform: 'rotate(-45deg)' } ]}
						/>
					</div>
					<div style={{ paddingTop: 40 }}>
						<Stryler
							string={sampleString}
							splitOn={' '}
							WrapperElements={[ 'span', 'div' ]}
							classNames={[ 'App-link', 'App-text' ]}
							styles={[ { fontSize: 36 }, { transform: 'rotate(-15deg)' } ]}
						/>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
