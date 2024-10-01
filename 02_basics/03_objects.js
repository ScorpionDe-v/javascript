//singleton.  

//object literals
// Object.create


const mySym1=Symbol("key1")
// const mySym2=Symbol("keys2")
const jsUser={
    name:"Nakul",
    "full name":"Nakul Dev",
    mySym:"mykey1",
    age:24,
    location:"kanpur",
    email:"nakuldev@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monaday","Saturday"]
}
// console.log(jsUser.name). this is not good practice
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
// Object.freeze(jsUser)
jsUser.email="nakuldeb@chatgpt.com";
console.log(jsUser);


jsUser.greeting=function(){
    console.log("Hello js user");
}
console.log(jsUser.greeting);