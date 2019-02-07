var list = document.getElementById("list");

var animalsArray = ["dog", "cat", "bear"];

function talkAboutAnimals(animals){
    for(var i = 0; i < animals.length; i++) {
        var listItem = document.createElement("li")
        listItem.textContent = "I saw a " + animals[i];
        if(animals[i] === "bear"){
            listItem.textContent += ". It was huge!";
        }
        list.appendChild(listItem);
    }
}
talkAboutAnimals(animalsArray);

console.log(animalsArray);
