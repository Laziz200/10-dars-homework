let arr=[1,2,33,8,0,9,2,4,];
let arr1=[5,3,7,6,9,];
function arrplussort() {
    let newarr=arr.concat(arr1);
    let sort=newarr.sort((a,b)=>a-b);
    return sort;
}
console.log(arrplussort(arr,arr1));