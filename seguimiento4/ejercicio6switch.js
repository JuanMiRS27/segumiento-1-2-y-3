let precioItem;
let totalPagar = 0;
let costoEnvio = 5000;
let restaurante;

do {
    restaurante = parseInt(prompt("Seleccione un restaurante:\n1. Hamburguesas\n2. Pizzería\n3. Comida China"));
} while (restaurante < 1 || restaurante > 3);

switch (restaurante) {
    case 1:
        alert("Ha seleccionado Hamburguesas.");
        do {
            menuHamburguesas = parseInt(prompt("Seleccione el menú:\n1. Hamburguesa simple ($25000)"));
        } while (menuHamburguesas !== 1);
        precioItem = 25000;
        break;
    case 2:
        alert("Ha seleccionado Pizzería.");
        do {
            menuPizzeria = parseInt(prompt("Seleccione el menú:\n1. Pizza familiar ($85000)"));
        } while (menuPizzeria !== 1);
        precioItem = 85000;
        break;
    case 3:
        alert("Ha seleccionado Comida China.");
        do {
            menuChina = parseInt(prompt("Seleccione el menú:\n1. Fideos con pollo ($18000)"));
        } while (menuChina !== 1);
        precioItem = 18000;
        break;
}

let cantidad;
do {
    cantidad = parseInt(prompt("Ingrese la cantidad de unidades a pedir (mínimo 1):"));
} while (cantidad < 1);

totalPagar = (precioItem * cantidad) + costoEnvio;

if (totalPagar < 23000) {
    alert("El pedido mínimo debe ser de $23000.");
} else {
    alert("Resumen del pedido:");
    alert("Subtotal: $" + (precioItem * cantidad));
    alert("Costo de envío: $" + costoEnvio);
    alert("Total a pagar: $" + totalPagar);

    let metodoPago;
    do {
        metodoPago = parseInt(prompt("Seleccione el método de pago:\n1. Efectivo\n2. Tarjeta débito/crédito"));
    } while (metodoPago !== 1 && metodoPago !== 2);

    if (metodoPago === 1) {
        alert("Ha seleccionado pago en efectivo.");
    } else {
        alert("Ha seleccionado pago con tarjeta.");
    }

    alert("Tiempo estimado de entrega: 45 minutos a 1 hora.");
}