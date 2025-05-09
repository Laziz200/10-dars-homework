let arr=["salom","nima","gap"];
function upper() {
    let newarr=[];
    for (let i = 0; i < arr.length; i++) {
        let a=arr[i].toLocaleUpperCase();
        newarr.push(a);
    }
    return newarr;
}
console.log(upper(arr));