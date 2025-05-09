function getSum(...others) {
    const flat=others.flat();
    let count=0;
    for (let i = 0; i < flat.length; i++) {
        count+=flat[i];
    }
    return count
}
console.log(getSum(
    [1,0,0,0,0],
    [0,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,0],
    [0,0,0,0,1,5]
));