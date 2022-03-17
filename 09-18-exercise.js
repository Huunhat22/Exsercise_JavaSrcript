// Viết hàm liệt kê các số trong khoảng [a,b]
//  điều kiện  -100 < a < b < 100
// sử dụng for i
// sử dụng Array.from

function createArrayInRangeV1(a, b) {
    // your code here
    if (b <= -100 || b >= 100) return null;
    if (a > b || a <= -100) return null;

    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

function createArrayInRangeV2(a, b) {
    // your code here
    if (b <= -100 || b >= 100) return null;
    if (a > b || a <= -100) return null;

    return Array.from({ length: (b - a) + 1 }, (value, index) => index + a);

}

console.log(createArrayInRangeV2(-2, 5));