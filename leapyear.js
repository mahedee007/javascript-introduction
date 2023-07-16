function isleap(year){
    const remainder = year % 4;
    if (remainder === 0 && year % 100 === 0 && year % 400 === 0 ){
      return true;

    }else{
        return "Not";
    }
}
var isleapYear = isleap(1900);
console.log(isleapYear);