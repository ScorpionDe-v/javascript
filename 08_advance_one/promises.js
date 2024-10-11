// fetch('https://instagram.com').them().catch().finally()

const promiseOne = new Promise(function(resolve,reject){

    //do an async task
    //Database call,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)

})

promiseOne.then(function (){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree= new Promise(function(resolve,reject)
{ 
    setTimeout(function(){
     resolve({username:"nakul",email:"nakul@gmail.com"})
    },1000)

})
promiseThree.then(function(user){
console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error=true;
        let error=false;

        if(!error)
        {
            resolve({username:"nakul",password:"123456789"})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },2000)
})

 promiseFour
 .then((user)=>{
 console.log(user)
 return user.username
})
.then((username)=>{
  console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("The promise is either resolved or rejected"))

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        // let error=false;

        if(!error)
        {
            resolve({username:"Dev",password:"987654321"})
        }
        else{
            reject('ERROR:Dev went wrong')
        }
    },2000) 
});

async function consumePromiseFive(){
  try {
    const response = await promiseFive
    console.log(response)
    
  } catch (error) {
    console.log(error)
    
  }
}
consumePromiseFive()


// async function getAllUsers() {
// try {

//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//     console.log(data)
    
// } catch (error) {
//  console.log("E:,error");
    
// }
// };
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))