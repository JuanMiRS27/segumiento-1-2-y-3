function seleccionarModelo() {
    let modelo;
    do {
        modelo = parseInt(prompt("Seleccione el modelo de escoba:\n1. Escoba dura\n2. Escoba suave\n3. Cepillo"));
    } while (modelo !== 1 && modelo !== 2 && modelo !== 3);

    alert(`Ha seleccionado ${modelo === 1 ? "Escoba dura" : modelo === 2 ? "Escoba suave" : "Cepillo"}`);
    return modelo;
}

function seleccionarMaterial(modelo) {
    let material, precioBase;
    do {
        material = parseInt(prompt("Seleccione el material:\n1. Cerdas sintéticas\n2. Cerdas naturales"));
    } while (material !== 1 && material !== 2);

    alert(`Ha seleccionado ${material === 1 ? "Cerdas sintéticas" : "Cerdas naturales"}`);

    if (modelo === 1) {
        precioBase = material === 1 ? 8000 : 10000;
    } else if (modelo === 3) {
        precioBase = material === 1 ? 12000 : 15000;
    } else {
        precioBase = 0;
    }

    return precioBase;
}

function seleccionarOpcionAdicional() {
    let opcion, precioAdicional = 0;
    do {
        opcion = parseInt(prompt("Seleccione una opción adicional:\n1. Mango largo (+$2.000)\n2. Gancho en punta (+$500)\n3. Ninguna"));
    } while (opcion !== 1 && opcion !== 2 && opcion !== 3);

    switch (opcion) {
        case 1:
            alert("Ha seleccionado Mango largo.");
            precioAdicional = 2000;
            break;
        case 2:
            alert("Ha seleccionado Gancho en punta.");
            precioAdicional = 500;
            break;
        case 3:
            alert("Sin opciones adicionales.");
            break;
    }

    return precioAdicional;
}

function seleccionarCantidad() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingrese la cantidad de escobas a fabricar (mínimo 3, máximo 30):"));
    } while (cantidad < 3 || cantidad > 30);
    return cantidad;
}

function calcularTotal(precioBase, precioAdicional, cantidad) {
    return (precioBase + precioAdicional) * cantidad;
}

function realizarCompra() {
    let modelo = seleccionarModelo();
    let precioBase = seleccionarMaterial(modelo);
    let precioAdicional = seleccionarOpcionAdicional();
    let cantidad = seleccionarCantidad();
    let totalPagar = calcularTotal(precioBase, precioAdicional, cantidad);

    alert(`Total a pagar: $${totalPagar}`);
}

realizarCompra();
