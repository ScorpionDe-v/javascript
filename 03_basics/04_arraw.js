//this keyword referce current context
const user={
    username:"nakul",
    price :999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcomne to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Dev"
// user.welcomeMessage()
console.log(this)
// function chai()
// {
//     let username="dev"
//     // console.log(this);
//     // console.log(this.username);

// }
// chai();

// 
// const chai = function(){
//     let username="Nakul"
//     console.log(this.username);
// }

const chai = ()=>{
    let username="Nakul"
    console.log(this);
}

//araw function explesite return 

// const addTwo =(num1,num2)=>{
//   return num1+num2
// }
// console.log(addTwo(3,4))

//implisite return of arraw function

// const addTwo =(num1,num2)=>num1+num2

// const addTwo =(num1,num2)=>(num1+num2)

const addTwo =(num1,num2)=>({username:"hitesh"})
  console.log(addTwo(3,4))

  const myArray=[2,3,4,5,6,7,8]
//   myArray.forEach()