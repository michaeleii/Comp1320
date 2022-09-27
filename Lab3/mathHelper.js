const squareRoot = (num) => Math.sqrt(num); //Returns the square root of a number.

const square = (num) => Math.pow(num, 2); // Returns the square of a number.

const distance = (x1, y1, x2, y2) => {
	let insideSquareRoot = square(x2 - x1) + square(y2 - y1);
	const pointDistance = squareRoot(insideSquareRoot);
	return `The distance between your two points: (${x1},${y1}), (${x2},${y2}) is ${pointDistance}.`;
};

module.exports = { distance };
