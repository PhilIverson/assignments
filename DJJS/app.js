var box = document.querySelector('.box');

box.addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = "blue";
})

box.addEventListener("mousedown", function(e){
    e.target.style.backgroundColor = "red";
})

box.addEventListener("mouseup", function(e){
    e.target.style.backgroundColor = "yellow";
});

box.addEventListener("dblclick", function(e){
    e.target.style.backgroundColor = "green";
});

window.addEventListener("scroll", function(e){
    box.style.backgroundColor = "orange";
});

window.addEventListener("keydown", function(e){
    if (e.keyCode === 82) {
        box.style.backgroundColor = 'red';
    }

    if (e.keyCode === 83) {
        box.style.backgroundColor = 'salmon';
    }

    if (e.keyCode === 84) {
        box.style.backgroundColor = 'teal';
    }
});


