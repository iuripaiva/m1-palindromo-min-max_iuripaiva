function isPalindrome(str){
    str = str.toLowerCase();
    let strLimpa = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            strLimpa += char;
        }
    }
    let len = strLimpa.length;
    for (let i = 0; i < len / 2; i++) {
        if (strLimpa[i] !== strLimpa[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function arrayMaxMin(arr){
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i]
        }
        if (min > arr[i]){
            min = arr[i]
        }
    }
    let minMax = [min, max]
    return minMax
}