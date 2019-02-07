numArr = [1,2,"3"]  

function every(numArr, callBack){
    for(var i=0; i < numArr.length; i++) {
        if(callBack(numArr[i])){
            continue;
    }   else {
        return false;
    }
    return true
}
}
var is = every(numArr, function(num) {
    return typeof num === "number";

});

console.log(is)





