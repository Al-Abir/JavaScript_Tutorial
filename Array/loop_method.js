//for each loop

let a = [1,2,3]

a.forEach((element)=>{
    console.log(element*element);
})

//array From

let n = "hello";

console.log(n);

let arr = Array.from(n);
console.log(arr);


//for of loop

for(let item of a){
     console.log(item); 
}

//for of loop
for(let im in a){
    console.log(a[im]);
}