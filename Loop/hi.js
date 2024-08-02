var prompt = require('prompt-sync')();

let age = prompt("What is your age = ");
if(age>10 && age<=20){
    console.log("You are adult")
}
else{
    console.log("You are child");
}