var prompt = require('prompt-sync')();


let sum =0;

let a = prompt("Please Input Your Number: ");
  

a = Number.parseInt(a);

console.log(typeof a);


for(let i=0; i<a; i++){
    sum+= i;
}

console.log(sum);


// for in loop

let obj = {
    abir:4,
    nahiyan:5,
    tosher:6,
}

for(let access in obj){
    console.log(access);  //ouput key
}
for(let access in obj){
    console.log(obj[access]); //only value
}
for(let access in obj){
    console.log(" key " + access + " value " + obj[access]); //key and value
}

//for of loop

for(let letter of "abir"){
  console.log(letter);
}



