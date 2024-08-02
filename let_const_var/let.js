var a =5;

{

    a = 6;
    console.log(a);
}

console.log(a);

/*output is 6 ,6 because var is not block scoped variable */

let b =5;

{

    let b = 6;
    console.log(b);
}

console.log(b);


/*output is 6 ,5 because  block scoped variable  same as work in Constant*/

/*1. var is globally scoped while let & const are block scoped
2. var can be updated and allow to redeclared within its scoped
3. let can be updated but not re-declared
4. const cn neither be updated not be re-declared.*/
var prompt = require('prompt-sync')();

let age = prompt("What is your age = ");
if(age>10 && age<20){
    console.log("You are adult")
}
else{
    console.log("You are child");
}