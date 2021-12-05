// xóa các nguyên âm trong chuổi : u e o a i
// giả định mỗi nguyên âm chỉ xuất hiện một lần
// nếu chuỗi có khoảng trắng đầu và cuối thì hãy bỏ ra.

function removeWove(str) {
    if (str.length === 0) return '';

    const removeU = str.replace('u', '');
    const removeE = removeU.replace('e', '');
    const removeO = removeE.replace('o', '');
    const removeA = removeO.replace('a', '');
    const removeI = removeA.replace('i', '');

    return removeI.trim();
}

console.log(removeWove('say hello '));