import React from 'react';

import useForm from './useForm';

const SplitAtIndex = ({ setStrylerSettings }) => {
  const { values, handleChange, handleSubmit } = useForm({ submitCallback: updateSettings });

  function updateSettings() {
    setStrylerSettings({
      mode: 'splitAt',
      ...values,
    });
  }

  return (
    <form className="col-xs-12 pb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="splitAtIndexes">Split string at these index(es):</label>
        <input
          type="text"
          className="form-control"
          id="splitAt"
          aria-describedby="splitAtHelp"
          placeholder="1,3"
          name="splitAt"
          value={values.splitAt}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary btn-block">Submit</button>
    </form>
  );
};
export default SplitAtIndex;
