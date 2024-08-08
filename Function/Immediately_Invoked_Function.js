// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// Exapanation:
//  Function immediately run hoi
//  onek somi golobal scope pollution ar jonno maje maje somossa hoi 
//  ai golobal scope pollution je na hoi tai () function diea wrap kora hoi.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


