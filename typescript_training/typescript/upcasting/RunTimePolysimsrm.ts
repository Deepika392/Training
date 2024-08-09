// run time polysrim with upcasting
class Animal{
    eat(){
        return 'animal class call '
    }
}

class Tiger extends Animal{
    eat(): string {
        return 'tiget class'
    }
}

class sheep extends Animal{
    eat(): string {
        return 'call sheep class'
    }
}

let animal = new Animal();
let tiger = new Tiger();
let sh = new sheep();

function calleat(obj:Animal){
   let res =  obj.eat();
 return res;
   
}

console.log(calleat(animal));
console.log(calleat(tiger));
console.log(calleat(sh));