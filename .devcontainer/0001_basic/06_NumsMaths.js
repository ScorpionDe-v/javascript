//Number
const score=400
// console.log(score);
const balance = new Number(200)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber=23.74645;
const otherNumber=123.74645;
// console.log(otherNumber.toPrecision(3));

const hundreds =100000
// console.log(hundreds.toLocaleString('en-IN'));


//Maths
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
//c\in ceil always choose maximum value of the integer.agar jara si bhi value increase hui to full value ko increase kr dega
// console.log(Math.ceil(4.2));
//Floor always choose minimum value of the integer
// console.log(Math.floor(4.9));
//min return the minimum value of given values
// console.log(Math.min(3,4,5,6,74,2))
//max return the maximum value of the given value
// console.log(Math.max(98,65,543,64,1234));
//math.random always return value between 0 and 1
// console.log(Math.random()*10);
//we will case like 0.04 then we will add 1.this stattement return minimum value 1
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
