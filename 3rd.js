//Function....

function sum(a,b){
    return a+b;
}
r=sum(1,2);
console.log(r)

//Non-primit=ive Data Types: Object, array, fucntion


//Arrow Function.....

const add = (a,b) => {
console.log("The sum is: ", a+b);
return a+b;

}
add(3,6);
add(1,2)
w=add(1,1)
console.log({w})




let api_call=false;
console.log({api_call});

function callAPI(){
    api_call=true;
    console.log("Calling the API");
}


setTimeout(callAPI,3000);   //setTimeout(function,TimeInMilliseconds);

let count=0;
 while(!api_call){

 console.log({api_call});
count++;
if(count==10){
    api_call=true;
}

}


