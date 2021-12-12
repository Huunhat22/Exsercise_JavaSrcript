// Bài tập làm quen Object
// tạo 1 object là Student với name là Easy Fontend và age là 18
// cách 1:
const student = {};
student.name = 'Easy Fontend';
student.age = '18';

console.log(student);

// cách 2:
const studentV2 ={
    name: 'Easy Fontend',
    age:'18',
};

console.log(studentV2);

//-------------------------------------------------/
// Kiểm tra một object có rỗng hay không
function isEmpty(obj){
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty({name:'Easy Fontend'}));


//-------------------------------------------------/
// Tính điểm trung bình môn của học sinh
function calcAvgMark(mark){
    // avg = sum / length
    const length = Object.keys(mark).length;
    let sum = 0;
    for (const key in mark) {
        const value = mark[key];

        sum += value;
    }

    return (sum / length).toFixed(1);
};

console.log(calcAvgMark({toan:8, van:6,anh:7.5}));