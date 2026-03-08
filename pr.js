function palindrome(x) {

    let reversed = x.toString().split("").reverse().join("");
    if (x.toString() === reversed) {
        console.log('true');
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}
palindrome(121);
palindrome(-121);
palindrome(10);