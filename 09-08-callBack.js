
// ví dụ về callBack function
// thực thi main, main truyền vào tên hàm handleOnFinish , 
// hàm main có tham số là onFinish kiểu là function,
// trong main gọi onFinish có nghĩa là nó đang gọi hàm handleOnFinish

function main(onFinish) {
    let sum = 0;
    for (let i =0; i < 10; i++){
        sum += i;
    }

    onFinish(sum)
}

function handleOnFinish(sum) {
    console.log('sum is :', sum);
}

main(handleOnFinish);