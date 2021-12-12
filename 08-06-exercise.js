// Clone 1 object sử dụng phép gán, Object.assign(), Spread

// V1
function cloneObject(obj){
    const cloneObj = {};
    cloneObj.name = obj.name;
    cloneObj.math = obj.math;

    return cloneObj;
}
console.log(cloneObject({name:'English', math:9}));


// V2 sử dụng Object.assign()
function cloneObject(obj){
    const cloneObj = Object.assign(obj);

    return cloneObj;
}
console.log(cloneObject({name:'English', math:9}));


// V3 sử dụng Spread
function cloneObject(obj){
    
    return  {...obj};
}
console.log(cloneObject({name:'English', math:9}));