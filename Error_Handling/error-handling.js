// function sum(x, y){
//    // var x = 1
//    // var y = 2
//     return x + y;

// }

// try {
// console.log(sum(x, y));
// } catch (err) {
//     console.log(err);
// }

var user = {username: "sam", password: "123abc"}

function login(username, password) {
    if(username !== user.username);
        throw new Error("Username doesn\'t match");

}  {
    if(password !== user.password); 
        throw new Error("Password doesn\'t match");
}
  //check credentials
try {
  login("ben", "test");
} catch (err) {
    console.log(err.message);

}
