// lấy chứ số hàng Đơn vị của một số có 3 chữ số.
function findOnsOfNumber(n) {
    if (n.toString().length !== 3) return -1;

    return n % 10;
}
console.log(findOnsOfNumber(125));


// lấy chứ số hàng Chục của một số có 3 chữ số.
function findOnsOfNumber(n) {
    if (n.toString().length !== 3) return -1;

    return Math.trunc((n % 100) / 10);
}
console.log(findOnsOfNumber(363));


// lấy chứ số hàng Trăm của một số có 3 chữ số.
function findOnsOfNumber(n) {
    if (n.toString().length !== 3) return -1;

    return Math.trunc(n / 100);
}
console.log(findOnsOfNumber(783));


// Tổng các chữ số trong một số có 3 chữ số.
function findOnsOfNumber(n) {
    if (n.toString().length !== 3) return -1;

    const ones = n % 10;
    const seconds = Math.trunc((n % 100) / 10);
    const third = Math.trunc(n / 100);

    return ones + seconds + third;
}
console.log(findOnsOfNumber(783));