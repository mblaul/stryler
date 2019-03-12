import React, { Component } from 'react';

import Stryler from './utils/stryler';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sampleString: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const sampleString = `Lorem Ipsum`;

    return (
      <div className="container-fluid">
        <div className="col-md-4 col-xs-12 mx-auto">
          <div className="display-3 py-2 text-center">Stryler</div>
          <h4 className="pb-5 text-center">A tool for styling simple strings</h4>
          <div class="form-group pb-5">
            <label for="sampleString">Test a cool string</label>
            <input
              type="text"
              class="form-control"
              id="sampleString"
              aria-describedby="sampleStringHelp"
              placeholder="Lorem Ipsum"
            />
          </div>
          <div className={'row'}>
            <Stryler
              string={sampleString}
              splitAt={[ 3, 6 ]}
              WrapperElements={[ 'span', 'div', 'span' ]}
              classNames={[ 'alert-warning', 'alert-success', 'alert-danger' ]}
              styles={[ { fontSize: 36 }, { transform: 'rotate(-45deg)' }, { lineHeight: 1 } ]}
            />
          </div>
          <div className={'row text-center'}>
            <Stryler
              string={sampleString}
              splitOn={' '}
              WrapperElements={[ 'span', 'div' ]}
              classNames={[ 'App-link', 'App-text' ]}
              styles={[ { fontSize: 36 }, { transform: 'rotate(-15deg)' } ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
