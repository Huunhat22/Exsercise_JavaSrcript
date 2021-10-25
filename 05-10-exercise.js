// Viết hàm lấy giá vé tương ứng theo số tuổi

// Dưới 6 tuổi hoặc từ 70 tuổi trở lên là được Free (trả về 0)
// Từ 6 - 12 tuổi là giá vé 20000VND
// Trên 12 tuổi thì đồng giá vé 50000VND

// ==> trả về số nguyên 
// -1 nếu dữ liệu không hợp lệ
// 0 Free
// các giá tiền hợp lệ

// Giả sử người sống thọ nhất là 125 tuôi

// V1
function getTicketPrice(age) {
    // your code here
    if ((age < 6 && age >= 1) || (age >= 70 && age <= 125)) return 0;

    if (age > 125 || age < 1) return -1;

    if (age >= 6 && age <= 12) return 20000;

    if (age > 12 && age < 70) return 50000;
}

// V2
function getTicketPrice(age) {
    // your code here
    // your code here
    if ((age < 6 && age >= 1) || (age >= 70 && age <= 125)) return 0;

    if (age > 125 || age < 1) return -1;

    if (age >= 6 && age <= 12) return 20000;

    return 50000;
}