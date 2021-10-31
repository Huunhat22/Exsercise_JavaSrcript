function getMaxDigit(n) {
    // your code here
    if (n < 0 || n >= 1000) return -1;

    if (n.toString().length === 2) return checkTwoNumber(n);

    if (n.toString().length === 3) return checkThreeNumber(n);

    return n;
}


function checkTwoNumber(n) {
    if (n.toString().length === 2) {
        var Max = n % 10;
        var second = Math.trunc((n % 100) / 10);

        if (second > Max) Max = second;
        return Max;
    }
}

function checkThreeNumber(n) {
    if (n.toString().length === 3) {
        var Max = n % 10;
        var second = Math.trunc((n % 100) / 10);
        var third = Math.trunc(n / 100);

        if (second > Max) Max = second;
        if (third > Max) Max = third;
        return Max;
    }
}

console.log(getMaxDigit(397));

// V2
function getMaxDigit_v2(n) {
    // your code here
    if (n < 0 || n >= 1000) return -1;

    var Max = n % 10;
    var second = Math.trunc((n % 100) / 10);
    var third = Math.trunc(n / 100);

    if (second > Max) Max = second;
    if (third > Max) Max = third;
    return Max;
}
console.log(getMaxDigit_v2(397));