//Practice - 1
/*let test = confirm("Do you Want to check u can eligible or not")
const checkage = (age)=>{
    return age>=18 ? true: false;
}
if(test){
    let age = prompt("Please Input the age : ");

    if(checkage(age)){
        alert("You  can drive")
    }else{
        alert("You can not drive ")
    }
}else{
    alert("Next time test")
}
    */

// Pratice -2 and 3


/*let runtime = true;
const agecheck =  (age) =>{
            return age >=18 ? true: false
          }

while(runtime){

    let age = prompt("Please Input the number: ")
    age = Number.parseInt(age);
    if(age<0){
        console.error("Please Enter a valid age")
        break;
    }

   else if(agecheck(age)){
        alert("You can drive ")
     }else{
        alert("You can not drive")
    }

    runtime = confirm("You can agin check another number eligible drive or not ?")
} */

//Practice -4


/*let a = prompt("Please Input the number: ");

a =Number.parseInt(a);

if(a>4){
    location.href="https://google.com";
}
*/

//Pratice-5

let color= prompt("Please input the color");
document.body.style.background = color