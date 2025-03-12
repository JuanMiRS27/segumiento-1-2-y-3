const PRECIO_BASICO = 2000;
const PRECIO_PREMIUM = 4000;

const OPCION_BASICA = 1;
const OPCION_PREMIUM = 2;

function solicitarOpcion() {
    let opcion;
    do {
        opcion = parseInt(prompt("Seleccione tipo de servicio: \n1. Básico ($2000 c/u) \n2. Premium ($4000 c/u)"));
    } while (opcion !== OPCION_BASICA && opcion !== OPCION_PREMIUM);
    return opcion;
}

function obtenerCostoUnitario(opcion) {
    return opcion === OPCION_BASICA ? PRECIO_BASICO : PRECIO_PREMIUM;
}

function solicitarPiezas() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingrese cantidad de piezas (1-20):"));
    } while (!(cantidad >= 1 && cantidad <= 20));
    return cantidad;
}

function calcularCostoTotal(costoUnitario, piezas) {
    return costoUnitario * piezas;
}

function main() {
    let opcion = solicitarOpcion();
    let costoUnitario = obtenerCostoUnitario(opcion);
    let piezas = solicitarPiezas();
    let costoTotal = calcularCostoTotal(costoUnitario, piezas);
    
    console.log("Costo total: $" + costoTotal);
}

main();