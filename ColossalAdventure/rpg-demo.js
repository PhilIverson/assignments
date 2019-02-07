var readline = require("readline-sync")

//FUNCTIONAL LOGIC
function player(name){
    this.name = name;
    this.hp = 100;
    this.inventory = [];
    this.enemiesKilled = 0;
}


//Game logic
var name = readline.question('What is your name, traveler?')
var player = new player()

var actions = ["run", "fight", "jump"]

var response = readline.keyInSelect(actions, "What will you do?")

// while(player.hp > 0 ) {
//     iswalking = rs = keyOnSelect(['w'], 'Press \w\' to continue');
//}

console.log(name)
console.log(actions[response])