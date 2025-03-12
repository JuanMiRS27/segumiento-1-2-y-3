alert("hola");
let resultado;
let numero;

do {
    numero = prompt("Ingrese un número");
    numero = parseInt(numero, 10);
} while (!(numero % 2 === 0 || numero % 2 === 1)); 


if (numero % 2 === 0) {
    resultado = "El número es par";
} else {
    resultado = "El número es impar";
}

alert(resultado);