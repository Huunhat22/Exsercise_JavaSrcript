
// LÀM QUEN VỚI HÀM RANDOM() TRONG KHOẢNG TỪ 0 -> N

function randomNumber(n) {

    if (n <= 0) return -1;
    const random = Math.random() * n;
    return Math.round(random);

}

console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));

// RANDOM() TRONG KHOẢNG TỪ A -> B . A < B
// giải thuật
// max= a,
// range = b -a
// kết quả sẽ từ random(range) + a

function randomNumberInRange(a, b) {

    if (a >= b) return -1;
    const random = Math.random() * (b - a);
    return Math.round(random) + a;
}

console.log(randomNumberInRange(10, 100));
console.log(randomNumberInRange(11, 99));
console.log(randomNumberInRange(100, 1000));
console.log(randomNumberInRange(100, 1000));
console.log(randomNumberInRange(1000, 10000));
console.log(randomNumberInRange(1000, 10000));