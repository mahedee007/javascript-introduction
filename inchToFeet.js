function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
console.log(inchToFeet(45).toFixed());

function feetToInch(feet){
    const inch = feet * 12;
    return inch;

}
console.log(feetToInch(5.9999999));