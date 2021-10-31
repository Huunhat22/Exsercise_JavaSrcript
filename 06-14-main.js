// Kiểm tra số có tối đa 3 chữ số có phải là số đối xứng hay không
// 1 , 22,33,121,212,313..

function isSymmetricNumber(n) {
    // your code here 
    if (n < 0 || n > 999) return false;

    if (n < 10) return true;

    var onePosition = n % 10;
    var secondPosition = Math.trunc((n % 100) / 10);
    var thirdPosition = Math.trunc(n / 100);

    if (n <= 99) return (Math.trunc((n % 100) / 10) === n % 10);
    return (Math.trunc(n / 100) === n % 10)

}
console.log(isSymmetricNumber(2));