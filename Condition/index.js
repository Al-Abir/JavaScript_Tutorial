var prompt = require('prompt-sync')();

let age = prompt("What is your age = ");
if(age>10 && age<20){
    console.log("You are adult")
}
else{
    console.log("You are child");
}


/* Prompt is not working in  VS code  so solve the issue 3 step

  command Line:
  -------------
  1. npm init -y
  2. npm i propmt-sync

  text file add the the line:
  -------------------------
  var prompt = require('prompt-sync')();

  */
