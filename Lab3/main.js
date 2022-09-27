const mathHelper = require("./mathHelper");
const process = require("process");
const fs = require("fs");

process.argv.splice(0, 2); //Removes the first 2 elements from process.argv array so we can have just the user inputs.

const userInput = process.argv; //Contains array of what the user inputted.

let folder = "dataPoints"; //Name of the folder we will create

const processInput = (input, path) => {
	//Creates a folder
	fs.mkdir(path, (err) => {
		if (err) {
			path = "temp_" + path; //Adds a temp_ to the path name if path name is already created.
			processInput(input, path); //Recursively call the processInput function and make a folder with new path name.
		}
		const data = "";
		fs.writeFile(path, data, (err) => {
			if (err) {
				console.log(err);
			}
		});
	});
};

processInput(userInput, folder);
