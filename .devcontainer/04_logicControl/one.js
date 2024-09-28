//if statement
//true the inside code will execute if false then inside code will not execute

const isUsetloggedIn=true
const temperature =41;

// if(temperature===40)
// {
//     console.log("less than 50");
// }
// else {
// console.log("temperature is greater than 50");
// }
// console.log("Executed")



// if(2==="2"){
//   console.log("executed")
// }

// if(2!="3"){
//     console.log("executed");
//   }
  

// const score = 200;
// if(score>100)
// {
//     const power ="fly"
//     console.log(`user power:${power}`);
// }


const balance =1000
// if(balance>500) console.log("test"),console.log("test2");//immuture code

// if(balance<500)
//     { 
//     console.log("less than");

//     }
//     else if(balance<700)
//     {
//         console.log("less than 700");
//     }
//     else if(balance<900)
//     {
//         console.log("less than 900")
//     }
//     else{
//         console.log("less than 1100")
//     }


const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard)
{
    console.log("allow to purchase course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");

}