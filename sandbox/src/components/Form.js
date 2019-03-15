import React, { Fragment } from 'react';
import Settings from './Settings';
import useForm from './useForm';

import Stryler from '../utils/stryler';

const Form = () => {
  const initialValues = { sampleString: 'Hello world' };
  const { values, handleChange, handleSubmit } = useForm({ initialValues });
  const sampleString = 'lorem ipsum';
  return (
    <Fragment>
      <form className="col-xs-12 pb-5" onSubmit={handleSubmit}>
        <div className="form-group col-md-8 col-xs-12 mx-auto text-center">
          <label htmlFor="sampleString">Test a cool string</label>
          <input
            type="text"
            autoComplete="false"
            className="form-control form-control-lg text-center"
            id="sampleString"
            aria-describedby="sampleStringHelp"
            placeholder="Lorem Ipsum"
            name="sampleString"
            value={values.sampleString}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <Settings />
        </div>
        <div className="col-md-6 col-xs-12">
          <div className={'row'}>
            <Stryler
              string={values.sampleString}
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
    </Fragment>
  );
};

export default Form;
