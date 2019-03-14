import React from 'react';

import useForm from './useForm';

const SplitAtIndex = (props) => {
  const { values, handleChange, handleSubmit } = useForm({});

  return (
    <form className="col-xs-12 pb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="splitAtIndexes">Split string at these index(es):</label>
        <input
          type="text"
          className="form-control"
          id="splitAtIndexes"
          aria-describedby="splitAtIndexesHelp"
          placeholder="[1,3]"
          name="splitAtIndexes"
          value={values.splitAtIndexes}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary btn-block">Submit</button>
    </form>
  );
};
export default SplitAtIndex;
