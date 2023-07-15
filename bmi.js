//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height, 2);
    if(bmi > 18 ){
        return "good";
    }
    else if(bmi > 20 && bmi < 30){
        return "bad";
    }
    else {
        return "normal";
    }
}



//  If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(1000, 2.8);
console.log(bmi); 

// bmi should equal 20 when it's rounded to the nearest whole number.


