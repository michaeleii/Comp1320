const mathHelper = require("./mathHelper");
const process = require("process");
const fs = require("fs");

process.argv.splice(0, 2); //Removes the first 2 elements from process.argv array so we can have just the user inputs

const userInput = process.argv;

const processInput = (input) => {
	let path = "/dataPoints";
	fs.mkdir(path, (err) => {
		if (err) {
			console.log(err.path);
		}
		// file written successfully
	});
};

processInput(userInput);
