// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var jsonData = xhr.responseText;
//         var data = JSON.parse(jsonData);
//         var name = data.name;
//         document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
//         document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
//         spaceshipurl = data.starships[0];
//         console.log(spaceshipurl);
//     }
// };

// xhr.open("GET", "http://swapi.co/api/people/1/", true);
// xhr.send();

//var list = document.querySelector('id');

function displayItem(parent){
    return function(item) {

    }
}

function listData(data, parent) {
    data.forEach(displayItem(parent)) 
        
}