var myName = ("mahedee sAkib khna");

// console.log(myName);
var firstLetter = myName.slice(0, 1);
firstLetter = firstLetter.toUpperCase();
var restLetter = myName.slice(1, myName.length);
restLetter = restLetter.toLowerCase();
var total = firstLetter + restLetter;
console.log (total);