let num1=1000;
let num2=12;
let num3=1305981031;
function num_of_digits() {
    let count=0;
   while (num1!=0) {
        let i=num1%10;
        count++;
        num1=Math.floor(num1/10);
   }
   return count;
}
console.log(num_of_digits(num1));

function num_of_digit() {
    let count=0;
   while (num2!=0) {
        let i=num2%10;
        count++;
        num2=Math.floor(num2/10);
   }
   return count;
}

console.log(num_of_digit(num2));

function num_of_digi() {
    let count=0;
   while (num3!=0) {
        let i=num3%10;
        count++;
        num3=Math.floor(num3/10);
   }
   return count;
}

console.log(num_of_digi(num3));
