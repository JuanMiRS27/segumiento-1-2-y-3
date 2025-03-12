const VALOR_MATRICULA = 7000000;

function solicitarOpcionPago() {
    let opcion;
    do {
        opcion = parseInt(prompt("Seleccione una opción de pago:\n1. Pago completo (5% de descuento)\n2. Pago en 2 cuotas \n3. Pago en 3 cuotas"));
    } while (![1, 2, 3].includes(opcion));
    return opcion;
}

function calcularPago(opcion) {
    let total, cuota;
    
    switch (opcion) {
        case 1:
            total = VALOR_MATRICULA * 0.95;
            alert("Ha seleccionado pago completo. Descuento aplicado: 5%");
            alert("Total a pagar: $" + total);
            break;
        case 2:
            total = VALOR_MATRICULA * 1.02;
            cuota = total / 2;
            alert(`Ha seleccionado pago en 2 cuotas.\nTotal a pagar con intereses: $${total}\nCada cuota será de: $${cuota}`);
            break;
        case 3:
            total = VALOR_MATRICULA * 1.02 * 1.02;
            cuota = total / 3;
            alert(`Ha seleccionado pago en 3 cuotas.\nTotal a pagar con intereses: $${total}\nCada cuota será de: $${cuota}`);
            break;
    }
}

function main() {
    let opcionPago = solicitarOpcionPago();
    calcularPago(opcionPago);
}

main();
