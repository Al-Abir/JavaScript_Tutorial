

/*function createAbir(n) {
  // Initial value

    return function() {
        return n++; // Increment and return the value
    };
}

const abir = createAbir(5);

console.log(abir()); // 5
console.log(abir()); // 6
console.log(abir()); // 7

/*var createCounter = function(n) {
    return function() {
        return n++;
    };
}; *

Create a counter starting at 5
const counter = createCounter(5);

console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8
console.log(counter()); //9



/*var createCounter = (n) => {
    return () =>{
       return n++;
     }
};

// Create a counter starting at 5
const counter = createCounter(5);

console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8
console.log(counter()); // 9
*/
const arrowmul = (a,b)=>{

    return ()=>{
        return a*b;

    }
     
}

let a =5;
let b= 20;


const arrow = arrowmul(a,b);
console.log(arrow());


