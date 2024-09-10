
// includes: Checks for the presence of a substring.
// concat: Combines strings.
// replace: Replaces substrings.
// trim: Removes whitespace from ends.
// slice: Extracts a part of a string.
// split: Divides the string into an array of substrings based on the delimiter provided.

let abir = "Washeikh";
let sheikh = "Nahiyan";
let sentence = `${abir} is a friend of ${sheikh}`;
console.log(sentence); 
// Output: Washeikh is a friend of Nahiyan



let hello = "how are you";
let word = "are";
console.log(hello.includes(word)); // true
console.log(`The word ${word} ${hello.includes(word) ? 'is' : 'is not'} in the sentence`);
// Output: The word are is in the sentence


let x = "hello";
let y = "How are You";
let z = x.concat(" ", y);
console.log(z); 
// Output: hello How are You

let na = "abir shei";
let newName = na.replace("shei", "sheikh");
console.log(newName); // Output: abir sheikh

let a = " hello ";
let b = a.trim(); // Removes whitespace from both ends
console.log(b); // Output: hello

let m = "hello how are you";
let n = m.slice(2);
console.log(n); // Output: llo how are you


let st = "apple,banana,cherry";
let fruits = st.split(",");
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

let sent = "Hello world this is JavaScript";
let words = sent.split(" ");
console.log(words); // Output: ['Hello', 'world', 'this', 'is', 'JavaScript']

let text = "one1two2three3four";
let parts = text.split(/\d/); // Split by any digit
console.log(parts); // Output: ['one', 'two', 'three', 'four']

let str = "Hello";
let characters = str.split("");
console.log(characters); // Output: ['H', 'e', 'l', 'l', 'o']