# TimeCalculator

Simple JavaScript program to calculate my age in seconds. I perform some basic mathematics to find my age in second in this program.



I start building a simple program that can help me calculate the number of

seconds in a day.



And for that, we need 3 things.



1. SeconsPerMinute

2. MinutesPerHours

3. HoursPerDay



So, I declared some variable first as follow



var secondsPerMin = 60;

var minPerHours = 60;

var hoursPerDay = 24;



And, then I performed a simple arithmetic function to find a second in a day.



var secondPerDay = secondsPerMin * minPerHours * hoursPerDay;



Now, I want to find that how many seconds old I'm. So, for that, I declared some more variables.



var dayPerWeek = 7;

var weekPerYear = 52;



Then, 1st I perform an operation to find SecondsPerWeek and then SecondsPerYear.



After that, I declare one more variable myAge is my actual age and multiply that variable with a SecondsPerYear variable.



var secondsOfMyAge = secondPerYear * myAge;

document.write("<h1> I'm " + secondsOfMyAge + " seconds old. </h1>");



This is a very simple programmer for beginners to learn how to perform simple math with JavaScript.

I hope you found you understand it.

