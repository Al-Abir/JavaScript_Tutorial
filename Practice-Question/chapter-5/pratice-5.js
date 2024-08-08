// Pratice 1
let arr = [1,3,50,4,6,90,100]

arr.push(10);

console.log(arr);

/* let a;

//
do{
    a = prompt("Enter the number");
    a = Number.parseInt(a);
    arr.push(a);
     
}while(a!=0);

console.log(arr);
*/
// proble -3
let newFilter = arr.filter((a)=>{
     return a%10==0
})

console.log(newFilter);

// problem 4

let mapSquire = arr.map((a)=>{
    return a*a;
})

console.log(mapSquire);

// problem 5
let m = [1,2,3,4,5]
let n = m.reduce((a,b)=>{
    return a * b;
})
console.log(n);