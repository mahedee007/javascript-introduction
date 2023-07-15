const names = ["mahedee", "Amit", "Babu", "Himel", "Sakib", "mahedee", "sakib"]
function uniqueName(name){
    const unique = [];
    for(const element of name){
        // console.log(element);
        if (unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const realName = uniqueName(names);
console.log(realName);