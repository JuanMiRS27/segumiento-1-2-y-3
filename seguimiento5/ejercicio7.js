function obtenerNumero(mensaje, condicion) {
    let numero;
    do {
        numero = parseInt(prompt(mensaje));
    } while (isNaN(numero) || (condicion && !condicion(numero)));
    return numero;
}

function calcularAyuda(genero, edad) {
    if (genero === 1) {
        return 40000;
    } else if (genero === 2) {
        if (edad > 50) {
            return 120000;
        } else if (edad >= 30) {
            return 100000;
        }
    }
    return 0;
}

let genero = obtenerNumero(`Ingrese su género:\n1: Hombre\n2: Mujer`, num => num === 1 || num === 2);
let edad = obtenerNumero("Ingrese su edad (debe ser un número válido)", num => num > 0);

let ayuda = calcularAyuda(genero, edad);

if (ayuda > 0) {
    alert(`El valor de ayuda mensual es: $${ayuda}.`);
} else {
    alert("No recibe ayuda mensual.");
}