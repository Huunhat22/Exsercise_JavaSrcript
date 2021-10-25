// Đổi giờ sang giây
function convertHoursToSeconds(hours) {
    if (hours < 0) return -1;
    if (hours === 0) return 0;

    const SECONDS_PER_HOURS = 3600;
    return hours * SECONDS_PER_HOURS;
}
console.log(convertHoursToSeconds(2));

// Tìm Max
function findMax(a, b, c) {
    let max = a;

    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}
console.log(findMax(4, 6, 5));

// Tìm Max là số chẳn
function findMax(a, b, c) {
    let max = Number.NEGATIVE_INFINITY;

    if (a % 2 === 0 && a > max) max = a;
    if (b % 2 === 0 && b > max) max = b;
    if (c % 2 === 0 && c > max) max = c;
    return max;
}
console.log(findMax(4, 16, 17));