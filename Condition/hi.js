var prompt = require('prompt-sync')();

let age = prompt("What is your age = ");
if(age>10 && age<=20){
    console.log("You are adult")
}
else{
    console.log("You are child");
}

let b =19;
let a = b > 18 ? "You can Drive " : "You can not drive";
console.log(a);