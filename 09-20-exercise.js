// biến mảng có sẳn thành mảng mới theo như sau:
// f(i) = f(i -1 ) + f(i + 1) , i là index
// nếu mảng có 2 phần tử thì giá trị sẽ hoán đổi vị trí cho nhau
// phần tử đầu tiên và cuối cùng sẽ là giá trị liền kề nhau.
// trả về một mảng mới.


// using for...i
function transformNumbersV1(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    let Arr = [];
    let swapNumber;
    if (numberList.length === 2) {
        return [...numberList].reverse();
    }
    if (numberList.length === 1) {
        return [...numberList];
    }

    for (let i = 0; i < numberList.length; i++) {
        if (i === 0) {
            swapNumber = numberList[i + 1];
            Arr.push(swapNumber);
        }
        if (i === (numberList.length - 1)) {
            swapNumber = numberList[i - 1];
            Arr.push(swapNumber);
        }
        if (i !== 0 && i !== (numberList.length - 1)) {
            const newNumber = (numberList[i - 1]) + (numberList[i + 1]);
            Arr.push(newNumber);
        }

    }

    return Arr;
}

// using forEach()
function transformNumbersV2(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];
    if (numberList.length <= 2) {
        return [...numberList].reverse();
    }

    let arr = [];
    numberList.forEach((value, index) => {
        const prevNumber = numberList[index - 1] ? numberList[index - 1] : 0;
        const nextNumber = numberList[index + 1] ? numberList[index + 1] : 0;
        arr.push(prevNumber + nextNumber);
    });

    return arr;
}

// using map()
function transformNumbersV3(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];
    if (numberList.length === 1) {
        return [...numberList];
    }

    return numberList.map((value, index) => {
        const prevNumber = numberList[index - 1] || 0;
        const nextNumber = numberList[index + 1] || 0;
        return (prevNumber + nextNumber);
    });
}