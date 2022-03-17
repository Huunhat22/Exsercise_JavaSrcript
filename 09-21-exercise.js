function hasPrimeV1(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    let flag = true;
    for (let i = 0; i < numberList.length; i++) {
        for (let j = 2; j < numberList[i]; j++) {
            if (numberList[i] % j === 0) { flag = false; }
            break;
        }
        if (flag) return true;
    }

    return false;
}

console.log(hasPrimeV1([4, 6, 7]));