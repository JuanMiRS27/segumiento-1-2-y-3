const restaDigitos = num => {
    const numString = Math.abs(num).toString();
    let resta = 0;
    for(let i = 0; i < numString.length; i++){
        const digito = parseInt(numString[i]);
        resta -= digito;
    }
    return resta;
}
console.log(restaDigitos(270));
console.log(restaDigitos(-1987));
console.log(restaDigitos(9));