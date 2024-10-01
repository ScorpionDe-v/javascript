let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024,8,22);
// let myCreateDate = new Date(2024,8,22,2,40);
// let myCreateDate = new Date("2024,01,22");
// console.log(myCreateDate.toDateString());
let myCreateDate = new Date("22-09-2024")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getHours());

newDate.toLocaleString('default',{weekday:"long",})
