
let test = confirm("Do you Want to check u can eligible or not")
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