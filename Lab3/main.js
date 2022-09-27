const mathHelper = require("./mathHelper");

process.argv.splice(0, 2); //Removes the first 2 elements from process.argv array so we can have just the user inputs

const userInput = process.argv;

const processInput = (input) => {
	fs.mkdir("/dataPoints");
	fs.writeFile("", content, (err) => {
		if (err) {
			console.error(err);
		}
		// file written successfully
	});
};
