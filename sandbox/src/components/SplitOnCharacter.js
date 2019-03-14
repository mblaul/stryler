import React from 'react';

import useForm from './useForm';

const SplitOnCharacter = (props) => {
  const { values, handleChange, handleSubmit } = useForm({});

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
      <button className="btn btn-primary btn-block">Submit</button>
    </form>
  );
};
export default SplitOnCharacter;
