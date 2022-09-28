const mathHelper = require("./mathHelper");
const process = require("process");
const fs = require("fs");

let folder = "dataPoints"; //Name of the folder we will create

const distance = mathHelper.distance; //Makes imported distance function shorter and easier to write

process.argv.splice(0, 2); //Removes the first 2 elements from process.argv array, so we have just the user inputs.

//Array that contains the numbers the user inputted into the terminal.
let userInput = process.argv.map(Number);

//Processes the user's input and outputs the distance of the points in a file called points.txt in a folder called dataPoints
const processInput = (input, path) => {
	//Creates a folder
	fs.mkdir(path, (err) => {
		if (err) {
			let originalPath = path;
			path = "temp_" + path; //Adds a temp_ to the folder name if folder name is already created.
			console.log(
				`Folder "${originalPath}" already exists. Creating a new folder for you called ${path}.\n`
			);
			processInput(input, path); //Recursively call the processInput function and make a folder with the new folder name.
		} else {
			//Point 1:
			const x1 = userInput[0];
			const y1 = userInput[1];

			//Point 2:
			const x2 = userInput[2];
			const y2 = userInput[3];

			const file = path + "/points.txt"; //The path of the file were going to create.
			const data = `The distance between your two points: (${x1},${y1}), (${x2},${y2}) is `; //The data were going to write to the file.

			//Writes the point data to the file
			fs.writeFile(file, data, (err) => {
				if (err) {
					console.log(err);
				} else {
					console.log(`Your contents have been saved to: /${file}`);

					let pointDistance = distance(x1, y1, x2, y2); //Calculates the distance of the points. (Imported from mathHelper.js)
					pointDistance = pointDistance.toString(); //Converts the distance to a string so we can append to the file.

					//Appends distance calculation to the file.
					fs.appendFile(file, pointDistance, (err) => {
						if (err) {
							console.log(err);
						}
					});
				}
			});
		}
	});
};

//Checks the length of the input
const lengthChecker = (input) => {
	//Input must be 4 numbers.
	if (input.length > 4) {
		return false;
	} else if (input.length < 4) {
		return false;
	}
	return true;
};

//Checks if the user entered letters or symbols.
const letterChecker = (input) => {
	for (const inputValue of input) {
		if (isNaN(inputValue)) {
			return false;
		}
	}
	return true;
};

//Checks the input for errors
const checkInput = (input) => {
	if (letterChecker(input) && lengthChecker(input)) {
		return true;
	} else {
		return false;
	}
};

//If user input passes the error check, then run the processInput function.
if (checkInput(userInput)) {
	processInput(userInput, folder);
} else {
	console.log(`INPUT ERROR: Please enter 4 numbers!`); //Else it will log an error message.
}
