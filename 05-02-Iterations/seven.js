const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumber = myNumers
                  .map( (num) => num*10)
                  .filter((fil) => fil >=50)
                  .reduce((a, b) => a+b);

console.log(newNumber)              