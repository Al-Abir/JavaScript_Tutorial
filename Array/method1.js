const n = [1,7,9];
console.log(typeof n);


let b = n.toString();
console.log(b);

let c = n.join('_');

console.log(c);


n.pop();
console.log(n);

n.push(19);
n.push(12);

console.log(n);

n.shift();

console.log(n);

n.unshift(4);

console.log(n);

delete n[1];

console.log(n);

     let compare =(a,b) =>{
            return a-b;        
          }

let num = [221,33,43,32,223,322]
num.sort(compare);
console.log(num)

