const mathHelper = require("./mathHelper");
const process = require("process");
const fs = require("fs");

let folder = "dataPoints"; //Name of the folder we will create

const distance = mathHelper.distance; //Makes imported distance formula shorter and easier to write

process.argv.splice(0, 2); //Removes the first 2 elements from process.argv array so we can have just the user inputs.

const userInput = process.argv; //Contains array of what the user inputted.

//Checks the input if the user entered more than 4 numbers and returns error message.
const checkInput = (input) => {
	if (input.length > 4) {
		return "ERROR: You've entered too many numbers. Please try again.";
	}
};
console.log(checkInput(userInput)); //Logs the error message.

const processInput = (input, path) => {
	//Creates a folder
	fs.mkdir(path, (err) => {
		if (err) {
			path = "temp_" + path; //Adds a temp_ to the path name if path name is already created.
			processInput(input, path); //Recursively call the processInput function and make a folder with new path name.
		}
		//Point 1:
		const x1 = userInput[0];
		const y1 = userInput[1];

		//Point 2:
		const x2 = userInput[2];
		const y2 = userInput[3];

		const result = distance(x1, y1, x2, y2); //Calculates the distance of points. (Imported from mathHelper.js)

		fs.writeFile(path, result, (err) => {
			if (err) {
				console.log(err);
			}
			console.log(`Your contents have been saved to: ${path}`);
		});
	});
};

processInput(userInput, folder);
