let arr=["animal","needle","run","swim"];
function newsoz() {
    let str="";
    for (let i = 0; i < arr.length; i++) {
        let n=arr[i];
        str+=n[0];
    }
    return str;
}
console.log(newsoz(arr));