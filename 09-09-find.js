// cách cài đặt hàm find

// V1
function findEvenNumber(arrayNumber) {
    
    let firstEven;
    for (let index = 0; index < arrayNumber.length; index++) {

        const element = arrayNumber[index];
        if (element % 2 === 0) {
            firstEven = element;
            break;
        }
    }

    return firstEven;
}

console.log(findEvenNumber([1,3,4,6]));


// V2
function findEvenNumber(arrayNumber) {
    if(!Array.isArray(arrayNumber)) return undefined;

    for (let index = 0; index < arrayNumber.length; index++) {

        const element = arrayNumber[index];
        if (element % 2 === 0) {
            return element;
        }
    }

    return undefined;
}

console.log(findEvenNumber([1,3,4,6]));


// V2
function findEvenNumber(arrayNumber, callBackFn) {
    if(!Array.isArray(arrayNumber)) return undefined;

    for (let index = 0; index < arrayNumber.length; index++) {

        const element = arrayNumber[index];
        if (callBackFn(element)) {
            return element;
        }
    }

    return undefined;
}

function handleNumber(element) {
    return element % 2 === 0;
}

console.log(findEvenNumber([1,3,4,6], handleNumber));


// V3
function findEvenNumber(arrayNumber, callBackFn) {
    if(!Array.isArray(arrayNumber)) return undefined;

    for (let index = 0; index < arrayNumber.length; index++) {

        const element = arrayNumber[index];
        if (callBackFn(element)) {
            return element;
        }
    }

    return undefined;
}

function handleIsEven(element) {
    return element % 2 === 0;
}

console.log(findEvenNumber([1,3,4,6], handleIsEven));

console.log(findEvenNumber([1,3,4,6], function (element) {
    return element % 2 === 0;
}));

console.log(findEvenNumber([1,3,4,6], (element => element % 2 === 0)));

