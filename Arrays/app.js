var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var food = [];
var poppedItem = vegetables.pop();
var shiftItem = fruit.shift();
var index = fruit.indexOf("orange");
var notFoundItemIndex = fruit.indexOf("kiwi");
fruit.push(index);
vegetables.push(vegetables.length);
food = food.concat(fruit, vegetables);
var remove = food.splice(4, 2);
food.reverse();
var food = food.toString();

/*console.log(poppedItem);
console.log(shiftItem);
console.log(index);
console.log(notFoundItemIndex);
console.log(fruit);
console.log(vegetables.length);
console.log(food);
console.log(remove);
*/

console.log(food);
