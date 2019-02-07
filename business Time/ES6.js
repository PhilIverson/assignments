var name = "John"
var age = 101
var pets = ["cat", "dog"]
var petObjects = []

function runForLoop() {
    for (var i = 0; i < pets.length; i++) {
        var pet = { type: pets[i] }
        if (pets[i] === "cat") {
            var name = "fluffy"
        } else {
            var name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

console.log(pets);