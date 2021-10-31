
// Tìm tổng 2 loại xe taxi cần phải gọi
// nếu số hành khách <=4 thì gọi xe 4 chỗ
// nếu số hành khách > 4 thì gọi xe 7 chỗ
// V2
function getTaxiCount(passengersCount) {
    // your code here

    if (passengersCount < 0) return -1;

    const seven = Math.trunc(passengersCount / 7);

    const four = passengersCount % 7;

    if (four === 0) return seven;


    return seven + 1;
}

console.log(getTaxiCount(6));