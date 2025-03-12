function seleccionarLocalidad() {
    let localidad;
    do {
        localidad = parseInt(prompt("Seleccione la localidad:\n1. General ($50,000)\n2. Preferencial ($150,000)\n3. VIP ($300,000)"));
    } while (isNaN(localidad) || localidad < 1 || localidad > 3);

    let precioBoleta;
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
    return { localidad, precioBoleta };
}

function solicitarCantidad() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingrese la cantidad de boletas a comprar (máximo 5):"));
    } while (isNaN(cantidad) || cantidad < 1 || cantidad > 5);
    return cantidad;
}

function calcularTotal(precioBoleta, cantidad, localidad) {
    const cargoServicio = 5000;
    let total = (precioBoleta * cantidad) + (cargoServicio * cantidad);
    let impuesto = 0;

    if (localidad !== 3) { 
        impuesto = total * 0.10;
        total += impuesto;
    } else {
        alert("La localidad VIP no tiene descuentos ni promociones.");
    }

    return { total, impuesto, cargoServicio };
}

function seleccionarMetodoPago() {
    let metodoPago;
    do {
        metodoPago = parseInt(prompt("Seleccione el método de pago:\n1. Efectivo\n2. Tarjeta de crédito"));
    } while (isNaN(metodoPago) || (metodoPago !== 1 && metodoPago !== 2));

    alert(`Ha seleccionado pago en ${metodoPago === 1 ? "efectivo" : "tarjeta de crédito"}`);
}

function realizarCompra() {
    let { localidad, precioBoleta } = seleccionarLocalidad();
    let cantidad = solicitarCantidad();
    let { total, impuesto, cargoServicio } = calcularTotal(precioBoleta, cantidad, localidad);

    alert("Resumen de compra:");
    alert(`Subtotal: $${precioBoleta * cantidad}`);
    alert(`Cargo por servicio: $${cargoServicio * cantidad}`);
    alert(`Impuesto (10%): $${localidad !== 3 ? impuesto : "Exento"}`);
    alert(`Total a pagar: $${total}`);

    seleccionarMetodoPago();
}

realizarCompra();
