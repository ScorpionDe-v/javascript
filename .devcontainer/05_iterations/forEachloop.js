const coding =["js","ruby","java","python","cpp"]
//callback  have. not name
coding.forEach( function (val) {
    // console.log(val);
})

coding.forEach((val)=>{
    // console.log(val);
})


function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)

const myCoding =[{
    languageName : "javascript",
    languageFileName :"js"
},
    {
    languageName : "java",
    languageFileName :"java"
},
{
    languageName : "Python",
    languageFileName :"py"
}]

myCoding.forEach((item)=>
{
    console.log(item.languageName);
})

