let num=Number(prompt("nechta uy qurmoqchisiz gugurt chopidan:"));
function gugurtdonasi() {
    let num1=num-1;
    let num3=6;
    return num*num3-num1;
}
let dona=gugurtdonasi(num);
console.log(`${num} ta uy qurishingiz uchun ${dona} gugurt chop ketadi.`);