function silenceTrump(str) {
    //iterate through the string w/ for loop
    // check for all vowels and remove
    //return string without the vowels


newStr = str.replace(/[aeiouAEIOU]/ig, '');
    return newStr
}