const userEmail="nakul@gmail.com"

if(userEmail)
{
    console.log("Got user email")
}
else{
    console.log("Don't have user Email")
}

//falsy values.---> false ,0,-0,0n , undefined ,Nan
//truthy value --> "0" ,'false' ," ", [] ,{} ,fuction(){} this is called empty function

const emptyObj={}
if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty");
}

//Nullish coalescing operator (??) : null undefined 

let val1;
// val1 = 5 ?? 10
// val1=null ?? 10

// val1 = undefined ?? 55

val1=null??10??20

// console.log(val1);

//ternary operator

// condtion ? true:false

const iceTea=100;
iceTea>=80? console.log("more than 80"): console.log("less than 80")



