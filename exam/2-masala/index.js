let arr=[1,2,3,4,5,6,7,8];
function myFunc() {
    let newarr=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(myFunc(arr));