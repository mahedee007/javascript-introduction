function isleap(year){
    if (year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "yes";
            }else{
                return "Not"
            }

        } else{
            return "Not";
        }

    }else{
        return "Not";
    }
}
var isleapYear = isleap(2000);
console.log(isleapYear);