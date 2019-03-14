import React from 'react';
import useForm from './useForm';

const Form = () => {
  const initialValues = { sampleString: 'Hello world' };
  const { values, handleChange, handleSubmit } = useForm({ initialValues });

  return (
    <form className="col-xs-12 pb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="sampleString">Test a cool string</label>
        <input
          type="text"
          className="form-control"
          id="sampleString"
          aria-describedby="sampleStringHelp"
          placeholder="Lorem Ipsum"
          name="sampleString"
          value={values.sampleString}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Form;
