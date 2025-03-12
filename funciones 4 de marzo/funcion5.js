const calcularMCD = (a, b) => {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Ambos números deben ser enteros.";
    }
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(calcularMCD(12, 24));  
console.log(calcularMCD(0, 50));   // No comprendo porque arroja que el maximo comun divisor es 50.
console.log(calcularMCD(8, 80));    
console.log(calcularMCD(2.8, 0)); 
