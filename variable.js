// var firstName = "Mahedee";
// var lastName = "Hasan";
// var fullName = firstName + " " + lastName
// console.log(fullName)
// var onionPrice = 40;
// var perPice = 10;
// var totalPrice = onionPrice / perPice
// console.log(totalPrice)
// console.log(6 >= 6);
function findLargest(first, second, third){
if(first < second && first < third){
    return first;
}
else if(second< first && second < third){
    return second;
}
else return third;

}
const larger = findLargest(100, 90, 70);
console.log(larger);