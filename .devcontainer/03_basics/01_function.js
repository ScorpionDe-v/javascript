//function definition
function sayMyName(){
  // console.log("nakul");
  // console.log("dev");
  // console.log("jitu");
  // console.log("rohit");

}
//sayMyName ---> functions reference
// sayMyName()---> function excution
sayMyName();

// function addTwoNumbers(number1,number2){
//      console.log(number1+number2)
// }

function addTwoNumbers(number1,number2){

  // let result=number1+number2;
  // return result

  return number1+number2;
  //console.log("Nakul");//after return in function nothing will excute and don't give the result
}

// addTwoNumbers(3,5)
// addTwoNumbers(3+"a").  return argument and undefined
// addTwoNumbers(4,null)
const result=addTwoNumbers(3,5)

// console.log("Result:",result);

function loginUserMessage(username="Dev")
{
  // if(username===undefined)
  if(!username)
    {
  console.log("please enter a username")
  return 
  }
  return `${username} just logged in`
}
// console.log(loginUserMessage("Nakul"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())// when we define nothing then result will be undefined


