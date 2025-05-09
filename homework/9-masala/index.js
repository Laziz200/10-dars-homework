let arr1=[1,2,2,2,3,4,5];
let arr2=[1,2,4,5];
let newarr=[];
for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
        newarr.push(arr2[i]);
    }
}
console.log(newarr);

let ar1=[-1,3,4,6,7,9];
let ar2=[1,3];
let newar=[];
for (let i = 0; i < ar2.length; i++) {
    if (ar1.includes(ar2[i])) {
        newar.push(ar2[i]);
    }
}
console.log(newar);

let a=[1,2,3,4,5];
let b=[10,12,13,15];
let c=[];
for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i])) {
        newarr.push(b[i]);
    }
}
console.log(c);
