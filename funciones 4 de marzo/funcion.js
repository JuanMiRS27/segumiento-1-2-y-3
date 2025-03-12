const esPrimo = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const limite = Math.sqrt(num);
    for (let i = 3; i <= limite; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
};

console.log(esPrimo(8))
console.log(esPrimo(10))
console.log(esPrimo(5))
console.log(esPrimo(2))
console.log(esPrimo(7))