var form = document.querySelector("form");
var fname = document.getElementById("fname")
var name = document.getElementById("age")

form.addEventListener("submit", function(e){
    e.preventDefault();
    var data = {
        frame: this.frame.value,
        age: this.age.value


    }

/*
    alert('Name:  " + this.fname.vale + ", Age:' + age)
*/

})

function handleDisplay(data) {
    var wrapper = document.createElement('div');
    var fnameLabel = document.createElement()
    var ageLabel = 
}