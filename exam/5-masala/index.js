const numbers=[1,3,5,10,15,20,22];
function filterDivisible() {
    let newarr=[];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]%3==0 || numbers[i]%5==0) {
            newarr.push(numbers[i]);
        }
    }
    return newarr;
}
console.log(filterDivisible(numbers));