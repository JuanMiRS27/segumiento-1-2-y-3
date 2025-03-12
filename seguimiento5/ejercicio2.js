function solicitarNumero() {
    let numero;
    do {
        numero = prompt("Ingrese un número");
        numero = parseInt(numero, 10);
    } while (isNaN(numero)); 
    return numero;
}

function determinarParidad(numero) {
    return numero % 2 === 0 ? "El número es par" : "El número es impar";
}

function main() {
    alert("Hola");
    let numero = solicitarNumero();
    let resultado = determinarParidad(numero);
    alert(resultado);
}

main();
