// Kiểm tra chuỗi URL có sử dụng phương thức bảo mật hay không
// cách 1: sử dụng indexOf()
// cách 2: sử dụng startsWith()

// using indexOf()
function isSecureUrlV1(url) {
    // your code here
    if (url === '') return false;

    return (url.indexOf('https') === 0 || url.indexOf('wss') === 0);
}


// using startsWith()
function isSecureUrlV2(url) {
    // your code here

    if (url === '') return false;

    return (url.startsWith('https', 0) || url.startsWith('wss', 0));
}