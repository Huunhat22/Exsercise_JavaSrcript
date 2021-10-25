// Tính diện tích hình chữ nhật
function calcOfRectangle(a, b) {
    if (a <= 0 || b <= 0) return -1;

    return a * b;
}

console.log(calcOfRectangle(3, 4));

// Tính chu vi hình tròn
function calcOfPerimeter(a, b) {
    if (a <= 0 || b <= 0) return -1;

    return (a + b) * 2;
}
console.log(calcOfPerimeter(3, 4));

// Tính diện tích hình tròn
function calcOfCircle(r) {
    if (r <= 0) return -1;

    return Math.PI * r * r;
}
console.log(calcOfCircle(3));