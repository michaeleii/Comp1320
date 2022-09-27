const mathHelper = require("./mathHelper");
const process = require("process");
const fs = require("fs");

process.argv.splice(0, 2); //Removes the first 2 elements from process.argv array so we can have just the user inputs.

const userInput = process.argv; //Contains array of what the user inputted.

let folder = "dataPoints"; //Name of the folder we will create

const distance = mathHelper.distance; //Makes imported distance formula shorter and easier to write

const processInput = (input, path) => {
	//Creates a folder
	fs.mkdir(path, (err) => {
		if (err) {
			path = "temp_" + path; //Adds a temp_ to the path name if path name is already created.
			processInput(input, path); //Recursively call the processInput function and make a folder with new path name.
		}

		const result = distance(
			userInput[0],
			userInput[1],
			userInput[2],
			userInput[3]
		); //Calculates the distance of points. (Imported from mathHelper.js)

		fs.writeFile(path, result, (err) => {
			if (err) {
				console.log(err);
			}
			console.log(`Your contents have been saved to: ${path}`);
		});
	});
};

processInput(userInput, folder);
