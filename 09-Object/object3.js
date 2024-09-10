
// //for loop
// 1. Object Keys
// 2, Object values,
// 3. Object entries

// Use Object.keys() to iterate over the keys.
// Use Object.values() to iterate over the values.
// Use Object.entries() to iterate over both keys and values.

/*const data = {

    name:"Washeikh Al Abir",
    age:25,
    skils:{
        lan:["html","css","javaScript"],
        pos:"Devoloper",
    },
    sex:"male",

    arr:["C++","DSA", 3],
}



for(let i =0; i<Object.keys(data).length; i++){
    console.log(Object.keys(data)[i] + ": " + data[Object.keys(data)[i]])
}


for(let i =0; i<Object.values(data).length; i++){
    console.log(Object.values(data)[i]);
}


for(let i =0; i<Object.entries(data).length; i++){
    const [keys, values]= Object.entries(data)[i];
     console.log( ` ${keys} ${values}`)
}
 


//Proper all object ar value dakte cai tahole

for(let i=0; i<Object.keys(data).length; i++){
   
    const keys = Object.keys(data)[i];
    const value= data[keys];
    if(typeof value=== "object" && !Array.isArray(value)){
        for(let subkey in value){
            console.log(`  ${subkey}: ${value[subkey]}`);
        }
    }else{
        console.log(keys + ": " + value)
    }
}

*/
//======================End Loop =================
/*
const details = {

    name:"Washeikh Al Abir",
    age:25,
    skils:{
        lan:["html","css","javaScript"],
        pos:"Devoloper",
    },
    sex:"male",

    arr:["C++","DSA", 3],
}
//for in loop
for(let data in details){
    console.log(`${data} : ${details[data]}`)
}
//for of loop

for(const [key , value] of Object.entries(details) ){
     console.log(`${key} : ${value}`)
}
 */

