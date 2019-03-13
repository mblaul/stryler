import React from 'react';

const Form = ({ formSettings }) => {
  return (
    <form className="col-xs-12 pb-5" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="sampleString">Test a cool string</label>
        <input
          type="text"
          className="form-control"
          id="sampleString"
          aria-describedby="sampleStringHelp"
          placeholder="Lorem Ipsum"
          name="sampleString"
        />
      </div>
      <button className="btn btn-primary btn-block">Submit</button>
    </form>
  );
};

export default Form;
