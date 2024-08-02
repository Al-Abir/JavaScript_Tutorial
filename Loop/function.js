

/*function abir(n){
    return ++n;
}

let n =5;


console.log(n= abir(n));  // 6
console.log(n= abir(n));  //7
console.log(n= abir(n)); //8

*/



var createCounter = function(n) {
    return function() {
        return n++;
    };
};

// Create a counter starting at 5
/*const counter = createCounter(5);

console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8
console.log(counter()); //9

*/

var createCounter = (n) => {
    return () => n++;
};

// Create a counter starting at 5
const counter = createCounter(5);

console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8
console.log(counter()); // 9
