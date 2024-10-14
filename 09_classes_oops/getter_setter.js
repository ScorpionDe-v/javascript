class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
    return this._email.toUpperCase();
    }
    set email(value){
    this._email=value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}dev`
    }
    set  password(value){
        this._password=value;
    }
}

// const nakul=new User("nakul@gmail.com","987765543211");
const nakul=new User("nakul@gmail.com","wxyz");
console.log(nakul.password);
console.log(nakul.email);