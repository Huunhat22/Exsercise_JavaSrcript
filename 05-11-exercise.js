// Viết hàm lấy giá vé tương ứng theo số tuổi

// Say hello bằng nhiều ngôn ngữ

function sayHello(languageCode) {
    // your code here ...    
    switch (languageCode) {
        case 'en':
            console.log('Hello');
            break;
        case 'vi':
            console.log('Xin chào');
            break;
        case 'fr':
            console.log('Bonjour');
            break;
        case 'cn':
            console.log('Nin hao');
            break;
        case 'ja':
            console.log('Konnichiwa');
            break;
        case 'ko':
            console.log('Anyoung haseyo');
            break;
        default:
            console.log('Hello')
    }
}