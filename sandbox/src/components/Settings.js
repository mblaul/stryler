import React, { Fragment, useState } from 'react';

import SplitOnCharacter from './SplitOnCharacter';
import SplitAtIndex from './SplitAtIndex';

const Settings = () => {
  const initialState = {
    splitOnCharacter: true,
    splitAtIndex: false,
  };
  const [ activeTabs, setActiveTab ] = useState(initialState);
  const [ strylerSettings, setStrylerSettings ] = useState({});

  function handleTabClick(event) {
    Object.keys(activeTabs).forEach((v) => (activeTabs[v] = false));
    setActiveTab({ ...activeTabs, [event.target.id]: true });
  }

  return (
    <Fragment>
      <ul className="nav nav-tabs nav-center" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="splitOnCharacter"
            href="#splitOnCharacter"
            role="tab"
            data-toggle="tab"
            aria-controls="splitOnCharacter"
            aria-expanded="true"
            onClick={handleTabClick}
          >
            Split On Character (Easy Mode)
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#splitAtIndex"
            role="tab"
            id="splitAtIndex"
            data-toggle="tab"
            aria-controls="splitAtIndex"
            onClick={handleTabClick}
          >
            Split At Index (Advanced)
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane fade show active" aria-labelledby="panel">
          <div className="mt-4 mx-3">
            {activeTabs.splitOnCharacter && <SplitOnCharacter setStrylerSettings={setStrylerSettings} />}
            {activeTabs.splitAtIndex && <SplitAtIndex setStrylerSettings={setStrylerSettings} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;
