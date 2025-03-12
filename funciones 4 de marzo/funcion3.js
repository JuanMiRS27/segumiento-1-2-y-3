const sumaDivisores = num => {
    if (!Number.isInteger(num)) {
        return "El valor debe ser un número entero.";
    }
   num = Math.abs(num);

    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }

    return suma;
}

console.log(sumaDivisores(-7));  
console.log(sumaDivisores(-8));  
console.log(sumaDivisores(-76));   
console.log(sumaDivisores(2.7));