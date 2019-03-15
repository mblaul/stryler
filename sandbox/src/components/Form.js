import React, { Fragment, useState } from 'react';
import Settings from './Settings';
import useForm from './useForm';

import Stryler from '../utils/stryler';

const Form = () => {
  const initialValues = { sampleString: 'Hello world' };
  const { values, handleChange, handleSubmit } = useForm({ initialValues });
  const [ strylerSettings, setStrylerSettings ] = useState({});

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
          <Settings setStrylerSettings={setStrylerSettings} />
        </div>
        <div className="col-md-6 col-xs-12">
          <div className="row">
            <div className="mx-auto my-auto">
              {strylerSettings.mode === 'splitOn' && (
                <Stryler string={values.sampleString} WrapperElements={[ 'span', 'span' ]} {...strylerSettings} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
