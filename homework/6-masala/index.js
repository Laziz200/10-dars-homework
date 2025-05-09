let obj={
    a:1,
    b:2
}
let obj2={
    shrimp:15,
    tots:12
}
let ob3={}
function toArray(obj) {
    const result = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key, obj[key]);
        }
    }
    return result;
}

function toArra(obj2) {
    const result = [];
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            result.push(key, obj2[key]);
        }
    }
    return result;
}
function toArr(obj3) {
    const result = [];
    for (const key in obj3) {
        if (obj3.hasOwnProperty(key)) {
            result.push(key, obj3[key]);
        }
    }
    return result;
}
console.log(toArray(obj));
console.log(toArra(obj2));
console.log(toArr(ob3));