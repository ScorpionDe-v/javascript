//array
const myArr=[0,1,2,3,4,5]
const myHeros=["batman","spiderman","ironman"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Array methods
// myArr.push(111)
// console.log(myArr);
// myArr.push(123)
// myArr.pop()

//unshift add the value at the starting of the array
// myArr.unshift(9)
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


// const newArr=myArr.join()
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);

//slice ,splice

console.log("A " ,myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);
const myn2=myArr.splice(1,3)
console.log("c ",myArr);
console.log(myn2);

//splice manupulate the original array and slice does't