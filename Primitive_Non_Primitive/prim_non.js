
/*
Primitive Data types
NULL
Number
symbol
string
boolean
BigINT
Undefined
*/

  let a = null;
  let b =345;
  let c = Symbol("hello");
  let d = "abir";
  let e= true;
  let f= BigInt("567")+BigInt("3");
  let g = undefined;

  console.log(a,b,c,d,e,f,g)

/*
None-Primitive Data types
key value pair example:
name:roll;
item:Price;
*/
const item = {
      "abir":true,
       "x":false,
 
}
console.log(item);
console.log(item['abir']);

//new item add 
item['rifat']="Manager"
console.log(item);