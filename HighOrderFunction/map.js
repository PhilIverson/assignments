// function doubleNumbers(arr){
//     return arr.map(function (e) {
//         return e*2 
//     }) 
// }
// console.log(doubleNumbers([2, 5, 100]))

// function stringItUp(arr){
//     return arr.map(function (str) {
//         return String(str)
//     })
// };

// stringItUp([2, 5, 100]);

// console.log(stringItUp([2, 5, 100]))


// function capitalizeNames(arr) {
//     return arr.map(function (cap) {
//         return cap.charAt(0).toUpperCase() + cap.substr(1).toLowerCase()
//     })
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

// function namesOnly(arr){
//     return arr.map(function (e){
//         return e.name
//     }
    
//     )
// }

// namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])


// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))

function namesOnly(arr){
    return arr.map(function (person){
            if (person.age > 18) {
                return person.name + " You can go to the Matrix" 
            } else {
                return person.name + " You are not Allowd"
            }
    })
}

namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])


console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))


