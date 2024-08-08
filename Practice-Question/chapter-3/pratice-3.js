
//Pratice 1

let marks ={
      abir:10,
      tosher:24,
      rifat:34
}

for(let i =0; i<Object.keys(marks).length; i++){

    console.log("The number is " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}


//pratice -2

for(let key in marks){
    console.log(key + " " + marks[key]);
}


//pratice -3
// var prompt = require('prompt-sync')();

// let cn =3;

// let i;
// while(i!=cn){

//     i = prompt("Please Input the number");
       console.log("try again")
    
// }
// console.log("Correct The number ");

//Problem 4

const mean = (a,b,c) =>{

    return (a+b+c)/4;
}

console.log(mean(4,5,6));
