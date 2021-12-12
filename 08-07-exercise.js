// viết Hàm so sánh 2 Object có bằng nhau hay không

const obj1= {
    name: 'nhat',
    age:26,
}

const obj2= {
    name: 'nhat',
    age:26,
}

function isEqual(obj1, obj2){

    
    if( Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    
    for (const key in obj1) {
        if(obj1[key] !== obj2[key]) return false;
    }
    
    return true;
}

console.log(isEqual(obj1,obj2));