// to parameterize a string
// eg: 'Vo Huu Nhat' -> 'vo-huu-nhat'

// Hàm replaceAll -> nodejs >=15 mới sử dụng được

// sử dụng hàm split để tách chuỗi thành 1 mảng các từ ['vo','huu','nhat']
// sử dụng hàm join để nối chuỗi đã tách lại với nhau.

function parameterize(str) {

    if (str === '') return '';

    // return str.toLowerCase().replace(' ', '-');
    return str.toLowerCase().split(' ').join('-');
}

console.log(parameterize('Vo Huu Nhat'));