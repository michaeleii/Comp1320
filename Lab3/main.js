const mathHelper = require("./mathHelper");
const process = require("process");
const fs = require("fs");

let folder = "dataPoints"; //Name of the folder we will create

const distance = mathHelper.distance; //Makes imported distance formula shorter and easier to write

process.argv.splice(0, 2); //Removes the first 2 elements from process.argv array, so we have just the user inputs.

//Converts the array to numbers
const userInput = process.argv.map(Number, (err) => {
	if (err) {
		console.log(
			"ERROR: You've entered a letter or a symbol. Please enter only numbers"
		);
	}
});

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

			fs.writeFile(file, data, (err) => {
				if (err) {
					console.log(err);
				} else {
					console.log(`Your contents have been saved to: /${file}`);

					let pointDistance = distance(x1, y1, x2, y2); //Calculates the distance of the points. (Imported from mathHelper.js)
					pointDistance = pointDistance.toString(); //Converts the distance to a string so we can append to the file.

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

//Checks the input if the user entered too many or too few numbers.
const checkInput = (input) => {
	//Input must be less than 4.
	if (input.length > 4) {
		return "ERROR: You've entered too many numbers. Please try again.";
	} else if (input.length < 4) {
		return "ERROR: You've entered too few numbers. Please try again.";
	}
	return true;
};

//If user input passes the error check, then run the processInput function.
if (checkInput(userInput)) {
	processInput(userInput, folder);
} else {
	console.log(checkInput(userInput)); //Else it will log an error message.
}
