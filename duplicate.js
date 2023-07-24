const names = ["mahedee", "Amit", "Babu", "Himel", "sakib", "mahedee", "sakib"]
function uniqueName(name){
    const unique = [];
    for(const element of name){
        // console.log(element);
        if (unique.includes(element) === false){
            unique.push(element);
        }
    }
    return unique;
}
const realName = uniqueName(names);
console.log(realName);
