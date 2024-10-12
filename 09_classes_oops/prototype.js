let myName="Nakul"
let Name="Dev"
// console.log(myName.trueLength());

let myHeros=["thor","spiderman","ironman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`siderman Power is ${this.spiderman}`);
    }
}

Object.prototype.Nakul=function(){
    console.log(`Nakul is present in all objects`);
}

// heropower.Nakul()

Array.prototype.heyNakul =  function(){
    console.log(`Nakul says Hello everyone`);
}

myHeros.Nakul()
myHeros.heyNakul()
// heropower.heyNakul()





