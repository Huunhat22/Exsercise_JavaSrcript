// kiểm tra một chuỗi nhập vào có nội dung '@gmail.com' ở trong hay không
// sử dụng : includes
// sử dụng : indexOf
// sử dụng : lastIndexOf

function hasEmail(str) {
    // return str.indexOf('@gmail.com') >= 0;
    // return str.lastIndexOf('@gmail.com') >= 0;
    return str.includes('@gmail.com');
}

console.log(hasEmail('abc@mail.com'));
console.log(hasEmail('abc@gmail.com'));
console.log(hasEmail('abc@gamail.com'));
