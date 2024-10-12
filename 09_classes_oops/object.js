function multiply5(num)
{  
     this.num=num
    return num*5;
}
multiply5.power=2;
console.log(multiply5(5));
console.log(multiply5.power);
console.log(multiply5.prototype);


function createUser(username,score){
    this.username=username
    this.score=score
}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}


const chai = new createUser("chai",23);
const tea = new createUser("tea",250)


chai.printMe()