

let userconcent =confirm("Do you want to play game");


if(userconcent){

    let a = Math.ceil(Math.random()*10)
    let counter = 0;

    while(counter<3){
        let userguess = prompt("Please Enter a Number: ")
        if(a==userguess){
            alert("Woohoo ! you guess the correct number");
            break;
        }else{
            alert("Sorry ! wrong number")
        }
        counter +=1;

        if(counter==3){
           alert("Sorry! only 3 guess the allowed")
        }
    }
    // if you want to play again
    let restart = confirm("Do you want to play agin");
    if(restart){
        location.reload();
    }
}else{
    alert("May be some other time")
}