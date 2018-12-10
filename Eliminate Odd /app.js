function noOdds(arr) {
    /*using a for loop to go through array
    check whether number is odd or even
    remove odd values return array */
    for (i = 0; i <= arr.length; i++){}
        if(arr[i] % 2 === 1){
            arr.splice(i, 1)
            i--;
        } 
    }
    return arr

