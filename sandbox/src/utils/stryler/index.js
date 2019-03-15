import React from 'react';

function createElements({
  stringSegments,
  WrapperElements,
  classNames,
  styles,
  repeatWrapperElements,
  repeatClassNames,
  repeatStyles,
  joinOn,
}) {
  let styledStrings = [];

  stringSegments.forEach((string, index) => {
    let WrapperElement =
      WrapperElements[index] || (repeatWrapperElements && WrapperElements[index % WrapperElements.length]);
    let className = classNames[index] || (repeatClassNames && classNames[index % classNames.length]);
    let style = styles[index] || (repeatStyles && styles[index % styles.length]);

    if (joinOn && index !== stringSegments.length) string += joinOn;
    let styledElement = (
      <WrapperElement className={className} style={style} key={index}>
        {string}
      </WrapperElement>
    );

    styledStrings.push(styledElement);
  });
  return styledStrings;
}

function index({
  string,
  splitAt,
  splitOn,
  WrapperElements = [ 'span' ],
  repeatWrapperElements = true,
  classNames = [],
  repeatClassNames = true,
  styles = [],
  repeatStyles = true,
}) {
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
    styledStrings = createElements({
      stringSegments,
      WrapperElements,
      classNames,
      styles,
      repeatWrapperElements,
      repeatClassNames,
      repeatStyles,
      joinOn: splitOn,
    });
  }

  return <React.Fragment>{styledStrings.map((styledString) => styledString)}</React.Fragment>;
}

export default index;
