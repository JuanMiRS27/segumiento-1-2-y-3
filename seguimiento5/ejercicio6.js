function obtenerNumero(mensaje) {
    let numero;
    do {
        numero = parseInt(prompt(mensaje));
    } while (isNaN(numero));
    return numero;
}

function encontrarMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

let num1 = obtenerNumero("Ingrese el primer número:");
let num2 = obtenerNumero("Ingrese el segundo número:");
let num3 = obtenerNumero("Ingrese el tercer número:");

let mayor = encontrarMayor(num1, num2, num3);

alert("El número mayor es: " + mayor);