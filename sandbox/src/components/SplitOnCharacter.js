import React from 'react';

import useForm from './useForm';

const SplitOnCharacter = ({ setStrylerSettings }) => {
  const { values, handleChange, handleCheckboxChange, handleSubmit } = useForm({ submitCallback: updateSettings });

  function updateSettings() {
    setStrylerSettings({
      mode: 'splitStringOnCharacter',
      splitOn: values.splitStringOnCharacter,
    });
  }

  console.log(values);

  return (
    <form className="col-xs-12 pb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="splitStringOnCharacter">Split string at these character(s):</label>
        <input
          type="text"
          className="form-control"
          id="splitStringOnCharacter"
          aria-describedby="splitStringOnCharacterHelp"
          placeholder="e"
          name="splitStringOnCharacter"
          value={values.splitStringOnCharacter}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="splitStringOnCharacter">Apply these classes:</label>
      <div className="form-check pb-1">
        <input
          className="form-check-input"
          type="checkbox"
          id="alertSuccess"
          name="alertSuccess"
          value=".alert-success"
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label alert-success" htmlFor="alertSuccess">
          .alert-success
        </label>
      </div>
      <div className="form-check pb-3">
        <input
          className="form-check-input"
          type="checkbox"
          name="alertPrimary"
          id="alertPrimary"
          value=".alert-primary"
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label alert-primary" htmlFor="alertPrimary">
          .alert-primary
        </label>
      </div>
      <button className="btn btn-primary btn-block">Submit</button>
    </form>
  );
};
export default SplitOnCharacter;
