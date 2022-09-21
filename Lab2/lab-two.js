//Returns the last two digits of a number.
const getLastTwoDigits = (num) => {
	num = num.toString(); //Converts the number to string
	num = num.slice(-2); //Extracts the last two characters of the string.
	return parseInt(num); //Return the value as a number.
};

/* 
The following pseudocode determines whether a year is a leap year or a common year in the Gregorian calendar
(and in the proleptic Gregorian calendar before 1582). 
The year variable being tested is the integer representing the number of the year in the Gregorian calendar.

if (year is not divisible by 4) then (it is a common year)
else if (year is not divisible by 100) then (it is a leap year)
else if (year is not divisible by 400) then (it is a common year)
else (it is a leap year)

Source:https://en.wikipedia.org/wiki/Leap_year#Algorithm 
*/

//Returns true if leap year and false if not a leap year.
const isLeapYear = (year) => {
	//Not a leap year if divisible by 4.
	if (!(year % 4 == 0)) {
		return false;
		//Is a leap year if not divisible by 100.
	} else if (!(year % 100 == 0)) {
		return true;
		//Not a leap year if divisible by 400.
	} else if (!(year % 400 == 0)) {
		return false;
	} else {
		return true;
	}
};

//The months of the year with their corresponding month codes.
const monthCodes = {
	january: 1,
	february: 4,
	march: 4,
	april: 0,
	may: 2,
	june: 5,
	july: 0,
	august: 3,
	september: 6,
	october: 1,
	november: 4,
	december: 6,
};

//Array of days of the week with the day codes aligning to their index number
const dayOfWeek = [
	"saturday", //0
	"sunday", //1
	"monday", //2
	"tuesday", //3
	"wednesday", //4
	"thursday", //5
	"friday", //6
];

//Returns an offset number, if dates are in these specifics year frames.
const yearChecker = (year) => {
	//In 1600s
	if (year >= 1600 && year < 1700) {
		return 6;
		//In 1700s
	} else if (year >= 1700 && year < 1800) {
		return 4;
		//In 1800s
	} else if (year >= 1800 && year < 1900) {
		return 2;
		//In 2000s
	} else if (year >= 2000 && year < 2100) {
		return 6;
		//In 2100s
	} else if (year >= 2100 && year < 2200) {
		return 4;
	} else {
		return 0;
	}
}

//Returns the day of the week.
const getDayOfWeek = (year, month, day) => {
	const LastTwoDigitsOfYear = getLastTwoDigits(year); //Get last two digits of year.
	const howMany12s = Math.floor(LastTwoDigitsOfYear / 12); //How many 12's are in the last two digits of the year.
	const remainder = LastTwoDigitsOfYear % 12; //Find remainder of the division.
	const howMany4s = Math.floor(remainder / 4); //How many 4's in the remainder.
	let monthCode = monthCodes[month]; //Get the month code.

	//Checks if leap year
	if (isLeapYear(year)) {
		//Checks if month is in January or February
		if (month == "january" || month == "february") {
			--monthCode;
		}
	}
	const offsetNum = yearChecker(year); //Checks the year to see how much the month code needs to be offset by.

	monthCode += offsetNum; //Offsets the month code

	const result = (howMany12s + remainder + howMany4s + monthCode + day) % 7;
	return dayOfWeek[result];
};


//Number of days in each month of 2022
const year2022 = {
	1: {
		month: "january",
		days: 31,
	},
	2: {
		month: "february",
		days: 28,
	},
	3: {
		month: "march",
		days: 31,
	},
	4: {
		month: "april",
		days: 30,
	},
	5: {
		month: "may",
		days: 31,
	},
	6: {
		month: "june",
		days: 30,
	},
	7: {
		month: "july",
		days: 31,
	},
	8: {
		month: "august",
		days: 31,
	},
	9: {
		month: "september",
		days: 30,
	},
	10: {
		month: "october",
		days: 31,
	},
	11: {
		month: "november",
		days: 30,
	},
	12: {
		month: "december",
		days: 31,
	},
};

//Prints out all the days of the week for 2022.
const makeCalendar = () => {
	const yearNum = 2022;

	//Iterates from 1-12 (# of months in a year)
	for (let monthNum = 1; monthNum <= 12; monthNum++) {
		const monthStr = year2022[monthNum].month; //Gets the month from month number ex. 5 = "may"

		//Iterates from 1 - (# days in the month)
		for (let dayNum = 1; dayNum <= year2022[monthNum].days; dayNum++) {
			const dayOfWeek = getDayOfWeek(yearNum, monthStr, dayNum);

			//Prints "dd-mm-yyyy is a (day of the week)."
			console.log(`${dayNum}-${monthNum}-${yearNum} is a ${dayOfWeek}.`); 
			
		}
	}
	console.log("");//Spacing for whitespace in the terminal.
};

module.exports = { getDayOfWeek, makeCalendar }; //Exports these functions to use in main.js


