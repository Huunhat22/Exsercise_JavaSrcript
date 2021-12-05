// viêt hàm format số giây luôn trả về chuỗi có 2 chữ số.
// vd: 00 , 09 , 20
// viết hàm theo 2 cách: sử dụng if else và slice()

function formatSecondV1(second1) {
    const zezoNumber = 0;
    if (second1 === '') return '';
    if (second1 < 0 || second1 >= 60) return '';

    if (second1 < 10) return `${zezoNumber}${second1}`;
    return second1.toString();

}

console.log(formatSecondV1('9'));

///////////////////////////////////////

function formatSecondV2(seconds2) {

    if (seconds2 === '') return '';
    if (seconds2 < 0 || seconds2 >= 60) return '';

    if (!(seconds2.toString().slice(1))) return `0${seconds2}`

    return seconds2.toString();
}

console.log(formatSecondV2('9'));