const lab2 = require("./lab-two");
const readlineSync = require("readline-sync");

lab2.makeCalendar();

const userYear = parseInt(readlineSync.question("What is the year: ")); //Asks user for the year
const userMonth = readlineSync.question("What is the month: ").toLowerCase(); //Asks user for the month
const userDay = parseInt(readlineSync.question("What is the day: ")); //Asks user for the day
const userDayOfWeek = lab2.getDayOfWeek(userYear, userMonth, userDay);

console.log(`${userDay}-${userMonth}-${userYear} is a ${userDayOfWeek}.`);
