function ageRamaining(age){
var yearsRemaining = 70 - age;
var days = yearsRemaining * 365;
var months = yearsRemaining * 12;
var weeks = yearsRemaining * 52;

console.log("you have", days, "days", months, "months", weeks, "weeks left")

}
ageRamaining(32);