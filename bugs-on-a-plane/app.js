var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["Year"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["Vehicle Color"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("Vehicle Make: " + firstName + "\nVehicle Model: " + lastName + "\nVehicle Year: " + age + "\nGender: " + gender + "\nVehicle Color: " + location + "\nDiet: " + diet + "\nGreat Would you like to take a Test Drive..");
}


submit.addEventListener("click", formAlert);