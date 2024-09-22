//there are 7 types of primitive datatypes .
//there are two catagoriazation according how to access data and how to store data in the memmory
// primitive data types--const,boolean,BigInt,String,null,undefined,Symbol .
//there data return the copy of data not data that's why there are called call by value 
//javascript is dynamically typed language
const score =100;
const  scoreValue=100.5;
const isLoggedIn=false;
const outsideTemp=null;

let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123')
console.log(id===anotherId);

// const bigNumber=1235768975675675873n;

//Referece(Non Primitive Data Types)-->Array ,Objects ,Function

const Heros=["batman","spiderman","lovelyman","shaktiman"];
let myObj={
    name:"nakul",
    age:24,
}

const myFunction=function(){
    console.log("Hello World");
}
//we can check type of any data types using typeof function
//function always return function and it is called object function
console.log(typeof myFunction);


