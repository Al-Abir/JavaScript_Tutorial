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
console.log(newReduce)
