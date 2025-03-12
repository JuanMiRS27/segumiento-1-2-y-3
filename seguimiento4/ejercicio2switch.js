const valorMatricula = 7000000;
let opcionPago;
let totalPagar;
let cuota;

do {
    opcionPago = parseInt(prompt("Seleccione una opción de pago:\n1. Pago completo (5% de descuento)\n2. Pago en 2 cuotas \n3. Pago en 3 cuotas "));
} while (opcionPago !== 1 && opcionPago !== 2 && opcionPago !== 3); 

switch(opcionPago) {
    case 1:
        totalPagar = valorMatricula * 0.95;
        alert("Ha seleccionado pago completo. Descuento aplicado: 5%");
        alert("Total a pagar: $" + totalPagar);
        break;

    case 2:
        totalPagar = valorMatricula * 1.02;
        cuota = totalPagar / 2;
        alert(`Ha seleccionado pago en 2 cuotas. \nTotal a pagar con intereses: $${totalPagar} \nCada cuota será de: $${cuota}`);
        break;

    case 3:
        totalPagar = valorMatricula * 1.02 * 1.02; 
        cuota = totalPagar / 3;
        alert(`Ha seleccionado pago en 3 cuotas. \nTotal a pagar con intereses: $${totalPagar} \nCada cuota será de: $${cuota}`);
        break;
}