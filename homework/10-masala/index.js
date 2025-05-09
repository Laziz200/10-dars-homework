function encrypt(str) {
    if (str.length === 0) return "";
    
    let result = str[0]; 
    for (let i = 0; i < str.length - 1; i++) {
        let nextChar = String.fromCharCode(str.charCodeAt(i) + 1); 
        result += "@" + nextChar + str[i + 1]; 
    }
    result += "@a"; 
    return result;
}

console.log(encrypt("banana")); 
console.log(encrypt("karaca"));
console.log(encrypt("burak")); 
console.log(encrypt("alpaca")); 