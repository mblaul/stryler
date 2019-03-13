import React, { Component } from 'react';

import Stryler from './utils/stryler';

import Form from './components/Form';
import Settings from './components/Settings';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sampleString: '',
      formSettings: 'splitOn',
    };
  }

  handleFormSettingsClick = (section) => {
    this.setState({ formSettings: section });
  };

  render() {
    const sampleString = `Lorem Ipsum`;
    const { formSettings } = this.state;
    return (
      <div className="container-fluid">
        <div className="col-md-8 col-xs-12 mx-auto">
          <div className="display-3 py-2 text-center">Stryler</div>
          <h4 className="pb-5 text-center">A tool for styling simple strings</h4>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <Form />
              <div className="row mx-auto text-center mb-3">
                <button className="btn btn-success mx-4 col-5">On Character</button>
                <button className="btn btn-secondary mx-4 col-5">At Index</button>
              </div>
              <Settings form={formSettings} />
            </div>
            <div className="col-md-6 col-xs-12">
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
        </div>
      </div>
    );
  }
}

export default App;
