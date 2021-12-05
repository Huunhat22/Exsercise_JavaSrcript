// viết hàm truncate chuỗi 
// vd : 'Easy fontend,4' -> 'Eas…' 

function truncate(str, number) {
    if (str.length <= number) return str;

    const newString = str.slice(0, number - 1);
    return `${newString}\u2026`;
}

console.log(truncate('Easy fontend', 4));