// let a=10
// const b=20
// var c=30
// {} ---> call scope
var c=300
if(true)
{
    let a=10
    const b=20
    // var c=30
    // c=30
    console.log("Inner:",a);
}

// console.log(a);
// console.log(b);
console.log(c);

function one()
{
    const username="nakul"
    function two(){
        const wensite="youtube"
        console.log(username);
    }
    // console.log(website)
    // two()
}
one()
if(true){
    const username="nakul"
    if(username=="nakul"){
        const website=" youtube"
        console.log(username+website);
    }
    // console.log(website)
}
// console.log(username);

console.log(addone(5))
function addone(num){
    return num+1

}


const addTwo=function(num){
    return num+2
}
addTwo(5)