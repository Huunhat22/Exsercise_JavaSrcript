// Vòng lặp For each
// V1
const numberList = [2, 3, 4];
numberList.forEach((element,index) => {
    console.log(element, index);
});


// V2
// Nếu Foreach chỉ truyền 1 tham số thì nó sẽ hiểu là element
const numberList = [2, 3, 4];
numberList.forEach((element) => {
    console.log(element);
});


// V3
// Nếu chỉ có 1 dòng lệnh thì mình có thể viết như sau
const numberList = [2, 3, 4];
numberList.forEach(element => console.log(element)
);

// V4
// Nếu chỉ có 1 dòng lệnh thì mình có thể viết như sau
const numberList = [2, 3, 4];
numberList.forEach(x => console.log(x)
);