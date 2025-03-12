function solicitarTipoLavadora() {
    let tipo;
    do {
        tipo = prompt(`Ingrese el tipo de lavadora que desea alquilar:
        1: Lavadora Grande [Costo por Hora: $4000]
        2: Lavadora Pequeña [Costo por Hora: $3000]`);
    } while (tipo != 1 && tipo != 2);
    return parseInt(tipo, 10);
}

function solicitarCantidad(mensaje) {
    let cantidad;
    do {
        cantidad = prompt(mensaje);
        cantidad = parseInt(cantidad, 10);
    } while (!(cantidad > 0));
    return cantidad;
}

function calcularCosto(tipoLavadora, cantidad, horas) {
    let costoBase = tipoLavadora === 1 ? 4000 : 3000;
    let tipo = tipoLavadora === 1 ? "Lavadora Grande" : "Lavadora Pequeña";

    let costoTotal = cantidad * costoBase * horas;
    
    if (cantidad > 3) {
        costoTotal -= costoTotal * 0.03; 
    }

    return { tipo, costoTotal };
}

function main() {
    let tipoLavadora = solicitarTipoLavadora();
    let cantidad = solicitarCantidad("Ingrese cuántas lavadoras va a alquilar");
    let horas = solicitarCantidad("Ingrese el número de horas en el que va a utilizar las lavadoras");
    
    let { tipo, costoTotal } = calcularCosto(tipoLavadora, cantidad, horas);
    
    alert(`Costo total por alquilar ${cantidad} ${tipo} por ${horas} horas: $${parseInt(costoTotal)}`);
}

main();
