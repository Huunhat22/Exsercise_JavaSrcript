// Viết hàm trả vể fullName, fullName không có khoảng trắng đầu cuối , 
// Khi firstName kí tự đầu tiên viết Hoa.
// Khi lastName kí tự đầu tiên viết Hoa.

function capitalize(str) {
    if (str === '') return '';

    const trimmedStr = str.trim();
    return `${trimmedStr[0].toUpperCase()}${trimmedStr.slice(1).toLowerCase()}`;
}
function getFullName(firstName, lastName) {
    // your code heret
    const fn = capitalize(firstName || '');
    const ln = capitalize(lastName || '');

    return `${fn} ${ln}`.trim();
}

console.log(getFullName('aBc', "deF"));