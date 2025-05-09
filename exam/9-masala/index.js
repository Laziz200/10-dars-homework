let arr=["pear","grape","melon","kiwi","banana"];
function mevalar() {
    let newarr=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length>4) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(mevalar(arr));