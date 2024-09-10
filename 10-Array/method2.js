// Map , filter , reduce

let arr = [10,20,30];

let newArray = arr.map((value, index)=>{
    console.log(value, index);
    return  value + 1;
})

console.log(newArray);


// filter

   const newFilter = arr.filter((value)=>{
        return value >10;
     })

   console.log(newFilter);


  const newReduce = arr.reduce((a,b)=>{
      return a+b;
   })
/*console.log(newReduce)
Given arr = [10, 20, 30], here's how reduce works:

First Iteration:

Initial value of a: 10 (the first element of the array)
Current element b: 20 (the second element)
a + b = 10 + 20 = 30
New a: 30
Second Iteration:

Current element b: 30 (the third element)
a + b = 30 + 30 = 60
New a: 60
*/