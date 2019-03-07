import React from 'react';

function index({ string, splitAt, splitOn, WrapperElements = [ 'span' ], classNames = [], styles = [] }) {
	let styledStrings = [];
	let splitString = [];

	if (splitAt) {
		splitAt.forEach((split, index) => {
			const lastIndex = index === 0 ? 0 : splitAt[index - 1];
			const currentIndex = splitAt[index];
			splitString.push(string.substring(lastIndex, currentIndex));
		});
		splitString.push(string.substring(splitAt[splitAt.length - 1]));
	}

	if (splitOn) {
		//TODO: Add a splitOn handler for simple strings
	}

	splitString.forEach((string, index) => {
		let WrapperElement = WrapperElements[index];
		let styledElement = (
			<WrapperElement className={classNames[index]} style={styles[index]} key={index}>
				{string}
			</WrapperElement>
		);

		styledStrings.push(styledElement);
	});

	return <React.Fragment>{styledStrings.map((styledString) => styledString)}</React.Fragment>;
}

export default index;
