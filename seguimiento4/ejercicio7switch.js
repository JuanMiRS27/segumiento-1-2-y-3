let precioBoleta;
let totalPagar = 0;
let impuesto = 0;
let cargoServicio = 5000;
let localidad;

do {
    localidad = parseInt(prompt("Seleccione la localidad:\n1. General ($50,000)\n2. Preferencial ($150,000)\n3. VIP ($300,000)"));
} while (isNaN(localidad) || localidad < 1 || localidad > 3);

switch (localidad) {
    case 1:
        alert("Ha seleccionado General.");
        precioBoleta = 50000;
        break;
    case 2:
        alert("Ha seleccionado Preferencial.");
        precioBoleta = 150000;
        break;
    case 3:
        alert("Ha seleccionado VIP.");
        precioBoleta = 300000;
        break;
}

let cantidad;
do {
    cantidad = parseInt(prompt("Ingrese la cantidad de boletas a comprar (máximo 5):"));
} while (isNaN(cantidad) || cantidad < 1 || cantidad > 5);

totalPagar = (precioBoleta * cantidad) + (cargoServicio * cantidad);

if (localidad !== 3) { 
    impuesto = totalPagar * 0.10;
    totalPagar += impuesto;
} else {
    alert("La localidad VIP no tiene descuentos ni promociones.");
}

alert("Resumen de compra:");
alert("Subtotal: $" + (precioBoleta * cantidad));
alert("Cargo por servicio: $" + (cargoServicio * cantidad));
alert("Impuesto (10%): $" + (localidad !== 3 ? impuesto : "Exento"));
alert("Total a pagar: $" + totalPagar);

let metodoPago;
do {
    metodoPago = parseInt(prompt("Seleccione el método de pago:\n1. Efectivo\n2. Tarjeta de crédito"));
} while (isNaN(metodoPago) || (metodoPago !== 1 && metodoPago !== 2));

if (metodoPago === 1) {
    alert("Ha seleccionado pago en efectivo.");
} else {
    alert("Ha seleccionado pago con tarjeta de crédito.");
}

