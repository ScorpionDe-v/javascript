const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    sql:"seql"
}

//for in loop

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortscut is for ${myObject[key]}`);

    
}

const programming =["js","rb","py","java","cpp"]
for (const key in programming) {
    // console.log(programming[key]);
}
//map is not iteratible
const map = new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('UK',"United Kingdom");
map.set('AUS',"Austrelia");

for (const key in map) {
    // console.log(key);
}


