// Write a function to check if a number a positve even number
// If yes, return true . Otherwise return false

// v1
function isPositiveEvenNumber(n) {
    let isValid;

    if (n > 0 && n % 2 === 0) {
        isValid = true;
    }
    else {
        isValid = false;
    }

    return isValid;
}



// v2
function isPositiveEvenNumber(n) {
    let isValid = false;

    if (n > 0 && n % 2 === 0) {
        isValid = true;
    }

    return isValid;

}



// v3
function isPositiveEvenNumber(n) {
    if (n > 0 && n % 2 === 0) {
        return true;
    }

    return false;
}


// v4
function isPositiveEvenNumber(n) {
    return (n > 0 && n % 2 === 0);
}
console.log(isPositiveEvenNumber(4));