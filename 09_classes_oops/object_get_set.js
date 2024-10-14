const User={
    _email:'dev@g.com',
    _password:"66235454",

    get email(){
        return this._email.toUpperCase();
    },
    set password(value){
       this._email=value
    }
}
const tea =Object.create(User)
console.log(tea.email);