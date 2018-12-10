function Animal(name, sound){
this.hasCellWalls = false;
this.name = name;
this.sound = sound;
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
}


function Mammal(name, sound){
    Animal.call(this, name, sound);
    this.hasFur = true;
}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

var dog = new Mammal("Dog", "woof");

console.log(dog)

dog.makeSound();
console.log(dog.constructor);



function speak (){
    console.log('Hi my name is' + this.name)
}
var person = {
    name
}
