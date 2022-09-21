var listOfTemperatures = ["13c", "23c", "12c", "57f", "69f", "30c"];

for (var temperatures of listOfTemperatures) {
	//Get the last letter of the string to determine if celsius or fahrenheit
	let unit = temperatures[temperatures.length - 1];

	//Getting the number part from the string by removing the c or f part
	let originalTemp = temperatures.replace("c", "");
	originalTemp = originalTemp.replace("f", "");

	//Convert the string into number data type, so we can do math with it
	originalTemp = parseInt(originalTemp);

	let orignalUnit;
	let convertedUnit;
	let convertedTemp;

	if (unit == "c") {
		orignalUnit = "celsius";
		convertedUnit = "fahrenheit";
		convertedTemp = Math.round(originalTemp * (9 / 5) + 32);
	} else if (unit == "f") {
		orignalUnit = "fahrenheit";
		convertedUnit = "celsius";
		convertedTemp = Math.round((originalTemp - 32) * (5 / 9));
	}
	console.log(
		`${originalTemp} degrees ${orignalUnit} is ${convertedTemp} degrees ${convertedUnit}.`
	);
}
