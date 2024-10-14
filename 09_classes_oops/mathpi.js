// console.log(Math.PI)
// math.PI=7;
// console.log(Math.PI)


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);


const chai={
    name:'ginger chai',
    price:300,
    isAvailable:true,

    orderChai:function () {
       console.log("chai not prepare right now")
    }
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false,
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [key,value] of Object.entries(chai)) {
    if (typeof value!=='function') {
        console.log(`${key} : ${value}`); 
    }   
}

