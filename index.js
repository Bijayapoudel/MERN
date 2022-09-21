//Asynhronous Fucntion.....


console.log(2+4*3)



function addAndMultiply(){
    console.log((1+2)*3);
}

addAndMultiply();




//Callback Funtion....

function callMeAgain(){
    console.log("CalledYOU");
}

setTimeout(callMeAgain,0);   //function(function,timer);


const promise1 = () => {
let a=  "Hello World";
return a;
}

promise1();
