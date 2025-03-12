function seleccionarRestaurante() {
    let restaurante;
    do {
        restaurante = parseInt(prompt("Seleccione un restaurante:\n1. Hamburguesas\n2. Pizzería\n3. Comida China"));
    } while (restaurante < 1 || restaurante > 3);

    alert(`Ha seleccionado ${restaurante === 1 ? "Hamburguesas" : restaurante === 2 ? "Pizzería" : "Comida China"}`);
    return restaurante;
}

function seleccionarMenu(restaurante) {
    let precioItem;
    let menu;
    
    switch (restaurante) {
        case 1:
            do {
                menu = parseInt(prompt("Seleccione el menú:\n1. Hamburguesa simple ($25000)"));
            } while (menu !== 1);
            precioItem = 25000;
            break;
        case 2:
            do {
                menu = parseInt(prompt("Seleccione el menú:\n1. Pizza familiar ($85000)"));
            } while (menu !== 1);
            precioItem = 85000;
            break;
        case 3:
            do {
                menu = parseInt(prompt("Seleccione el menú:\n1. Fideos con pollo ($18000)"));
            } while (menu !== 1);
            precioItem = 18000;
            break;
    }

    return precioItem;
}

function seleccionarCantidad() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingrese la cantidad de unidades a pedir (mínimo 1):"));
    } while (cantidad < 1);
    return cantidad;
}

function calcularTotal(precioItem, cantidad, costoEnvio) {
    return (precioItem * cantidad) + costoEnvio;
}

function seleccionarMetodoPago() {
    let metodoPago;
    do {
        metodoPago = parseInt(prompt("Seleccione el método de pago:\n1. Efectivo\n2. Tarjeta débito/crédito"));
    } while (metodoPago !== 1 && metodoPago !== 2);

    alert(`Ha seleccionado pago en ${metodoPago === 1 ? "efectivo" : "tarjeta"}`);
}

function realizarPedido() {
    const costoEnvio = 5000;
    
    let restaurante = seleccionarRestaurante();
    let precioItem = seleccionarMenu(restaurante);
    let cantidad = seleccionarCantidad();
    let totalPagar = calcularTotal(precioItem, cantidad, costoEnvio);

    if (totalPagar < 23000) {
        alert("El pedido mínimo debe ser de $23000.");
    } else {
        alert(`Resumen del pedido:\nSubtotal: $${precioItem * cantidad}\nCosto de envío: $${costoEnvio}\nTotal a pagar: $${totalPagar}`);
        seleccionarMetodoPago();
        alert("Tiempo estimado de entrega: 45 minutos a 1 hora.");
    }
}

realizarPedido();
