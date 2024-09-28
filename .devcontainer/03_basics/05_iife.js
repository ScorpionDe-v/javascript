//immediately invoked function expressions
//iife used remove the polution of global scope
(function chai(){
    //name iife
    console.log((`DB CONNECTED`))
})();
// ()()
// 
// ( ()=>{
//     console.log(`DB CONNECTED TWO`)
// })()

// ( function aurcode(){
//     console.log(`DB CONNECTED TWO`)
// })()

// ( () => {
//     console.log(`DB CONNECTED TWO`)
// })()

( (name) => {
    //simple iife
    console.log(`DB CONNECTED TWO ${name}`)
})('nakul')

