const name="Nakul"
const repoCount=100
// console.log(name+repoCount+"Values"); not a good practice
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);
//this is modern way .this is called string intecollation
const gameName =new String('Nakul')

console.log(gameName[0]);
//we can get object using proto method
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString=gameName.slice(-4,5);
console.log(anotherString);

const newStringOne = "   Nakul  ";
console.log(newStringOne);
console.log(newStringOne.trim());

