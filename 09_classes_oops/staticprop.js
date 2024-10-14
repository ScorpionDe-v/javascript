class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `12345`
    }
}

const nakul =new User("nakul")
// console.log(nakul.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone =new Teacher("iphone","iphone@gmail.com")
iphone.logMe();