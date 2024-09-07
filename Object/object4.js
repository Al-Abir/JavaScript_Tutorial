const bio = {
    name: "Washeikh Al Abir",
    age: 25,
    skils: {
        lan: ["html", "css", "javaScript"],
        pos: "Developer",
    },
    sex: "male",
    arr: ["C++", "DSA", 3],
};


Object.keys(bio).forEach((key) => {
    const value = bio[key]; 


    if (typeof value === 'object' && !Array.isArray(value)) {
        console.log(key + ":"); 
        for (let subkey in value) {
            console.log(`  ${subkey}: ${value[subkey]}`); 
        }
    } else {
        
        console.log(`${key}: ${value}`);
    }
});

Object.values(bio).forEach( (value) =>{
    console.log(value)
})

Object.entries(bio).forEach(([key, value]) => {
    
    if (typeof value === "object" && !Array.isArray(value)) {
        console.log(`${key}:`); 
        for (let subkey in value) {
            console.log(`  ${subkey}: ${value[subkey]}`); 
        }
    } else {
        console.log(`${key}: ${value}`);
    }
});
