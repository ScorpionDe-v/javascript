const Teacher={
    makeVideo:true

}

const user={
    name:"nakul",
    email:"nakuldev123@gmail.com"
}


const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="Scorpion     ";

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is:${this.trim().length}`)
}
anotherUsername.trueLength()
"nakuldev".trueLength()
"iceTea".trueLength()