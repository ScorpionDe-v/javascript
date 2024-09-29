// for of loop 


const arr=[1,2,3,4,5,6,7,8]

for (const num of arr) {
    // console.log(num);
}

const greetings="Hello World!";
for(const greet of greetings)
{
    // console.log(`Each char is ${greet}`);
}

// maps

const map = new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('UK',"United Kingdom");
map.set('AUS',"Austrelia");
// console.log(map);

for (const [key , value] of map) {
    // console.log(key, ':-', value);
    
}

//forOf loop cannot use for object iteration
const myObject={
    'game1':'NFS',
    'game2':'spiderman'
}
 for (const [key,value] of myObject) {
    //  console.log(key, ':-', value);
 }

