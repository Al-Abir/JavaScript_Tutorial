var prompt = require('prompt-sync')();

let a = Math.random() * 100;

a = Number.parseInt(a);

let score = 100;

let inp;

while(inp!=a){

    score = score-1;
    inp   = prompt("Please Input the number")

    if(a==inp){
        console.log("Congratulation ! You guess the correct answer");
        console.log(`you guess the actual number how many times ${100-score} chances`)
    }
    else if(inp > a && inp<100){
        console.log("Your number is gater then the actual number");
    }   
     else if(inp < a && a>0){
        console.log("Your number is smaller then the actual number");
    }
    else{
        console.log("Please input  number 1 to 100 between");
    }
}
