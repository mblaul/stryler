import React, { Fragment } from 'react';

const Settings = ({ control, name }) => {
  const disabled = true;

  return (
    <Fragment>
      <div className="form-check" />
      <form className="pb-5" onSubmit={() => {}}>
        <fieldset disabled={disabled}>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </fieldset>
      </form>
    </Fragment>
  );
};

export default Settings;
