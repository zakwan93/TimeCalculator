var secondsPerMin = 60;
var minPerHours = 60;
var hoursPerDay = 24;
var dayPerWeek = 7;
var weekPerYear = 52;
var secondPerDay = secondsPerMin * minPerHours * hoursPerDay;
document.write("<h1> There are " + secondPerDay + " second in a day");
var secondsPerWeek = secondPerDay * dayPerWeek;
document.write("<h1> There are " + secondsPerWeek + " seconds in a week. </h1>");
var secondPerYear = secondsPerWeek * weekPerYear;
document.write("<h1> There are " + secondPerYear + " seconds in a year. </h1>" );
var myAge = 24;
var secondsOfMyAge = secondPerYear * myAge;
document.write("<h1> I'm " + secondsOfMyAge + " seconds old. </h1>");
