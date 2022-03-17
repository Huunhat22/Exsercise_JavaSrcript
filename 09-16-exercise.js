// bài tập Find max
// sử dụng for i
// sử dụng forEach
// sử dụng reduce

function findMaxI(numberList) {

    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let Max = numberList[0];
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] > Max) {
            Max = numberList[i];
        }
    }

    return Max;
}

console.log(findMaxI([1, 3, 5, 21, 12]));


function findMaxEach(numberList) {

    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let Max = numberList[0];
    numberList.forEach(element => {
        if (element > Max) {
            Max = element;
        }
    });
    return Max;
}
console.log(findMaxEach([1, 3, 5, 21, 12]));


function findMaxReduce(numberList) {

    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    return numberList.reduce((number, Max) => (number > Max ? number : Max));
}
console.log(findMaxReduce([1, 3, 5, 21, 15]));