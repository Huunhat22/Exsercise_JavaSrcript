// Tìm số chẳn
function findEvenNumber(a) {
    if (a <= 0) return false;
    return a % 2 === 0;
}
console.log(findEvenNumber(6));


// Tìm số lẽ
function findOddNumber(a) {
    if (a <= 0) return false;
    return a % 2 != 0;
}
console.log(findOddNumber(3));


// Tìm số chính phương
function findSquareNumber(n) {
    if (n <= 0) return false;

    const sqrtNumber = Math.sqrt(n);
    const sqrtNInt = Math.trunc(sqrtNumber);
    return sqrtNInt * sqrtNInt === n;
}
console.log(findSquareNumber(9));
console.log(findSquareNumber(10));
