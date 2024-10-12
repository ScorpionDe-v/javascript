const user ={
    username:"nakul",
    loginCount:10,
    signedIn:true,
    getUserDetails:function(){
        // console.log("Got user details from database")
        // console.log(`Username:${this.username}`);
        console.log(this)
    }
}
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this)

// const promiseOne=new Promise()
// const dare = new  Date()

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    // return this; --return by default
    this.greeting= function(){
        console.log(`welcome ${this.username}`);
    }
}

const userOne= new User("nakul,12,true");
const useraTwo= new User("dev",15,false);
console.log(userOne.constructor)
// console.log(useraTwo)



