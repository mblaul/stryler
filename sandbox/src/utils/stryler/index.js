import React from 'react';

function createElements({ stringSegments, classNames, styles, WrapperElements, joinOn }) {
  let styledStrings = [];

  stringSegments.forEach((string, index) => {
    let WrapperElement = WrapperElements[index];

    if (joinOn && index !== stringSegments.length) string += joinOn;
    let styledElement = (
      <WrapperElement className={classNames[index]} style={styles[index]} key={index}>
        {string}
      </WrapperElement>
    );

    styledStrings.push(styledElement);
  });
  return styledStrings;
}

function index({ string, splitAt, splitOn, WrapperElements = [ 'span' ], classNames = [], styles = [] }) {
  let styledStrings = [];
  let stringSegments = [];

  //TODO: Add splitEvery to allow more control
  //TODO: Make a styles object composed of Wrappers, classNames and styles
  //TODO: Allow repeating of styles and classNames over a limited string

  if (splitAt) {
    splitAt.forEach((split, index) => {
      const lastIndex = index === 0 ? 0 : splitAt[index - 1];
      const currentIndex = splitAt[index];
      stringSegments.push(string.substring(lastIndex, currentIndex));
    });
    stringSegments.push(string.substring(splitAt[splitAt.length - 1]));

    styledStrings = createElements({ stringSegments, classNames, styles, WrapperElements });
  }

  if (splitOn) {
    stringSegments = string.split(splitOn);
    styledStrings = createElements({ stringSegments, classNames, styles, WrapperElements, joinOn: splitOn });
  }

  return <React.Fragment>{styledStrings.map((styledString) => styledString)}</React.Fragment>;
}

export default index;
