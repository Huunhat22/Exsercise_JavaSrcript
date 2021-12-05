// Truy tìm mật mã
// bỏ đi các ký tự Hoa trong chuỗi (không có số). Trả về kết quả.
// Noted: cho phép sử dụng For

function findSecret(code) {
    // your code here
    if (code === '') return '';
    return code.split("").filter((x) => x !== x.toUpperCase()).join('');

}

console.log(findSecret('ABCacb'));
