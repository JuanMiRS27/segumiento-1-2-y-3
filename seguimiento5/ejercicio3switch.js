function seleccionarModelo() {
    let modelo;
    do {
        modelo = parseInt(prompt("Seleccione el modelo de tenis:\n1. Clásicos [$500.000]\n2. Running [$800.000]\n3. Basketball [$1.000.000]"));
    } while (modelo !== 1 && modelo !== 2 && modelo !== 3);
    return modelo;
}

function obtenerPrecio(modelo) {
    let precio;
    switch (modelo) {
        case 1:
            precio = 500000;
            alert("Se ha seleccionado tenis Clásicos.");
            break;
        case 2:
            precio = 800000;
            alert("Se ha seleccionado tenis Running.");
            break;
        case 3:
            precio = 1000000;
            alert("Se ha seleccionado tenis Basketball.");
            break;
    }
    return precio;
}

function seleccionarTalla() {
    let talla;
    do {
        talla = parseInt(prompt("Ingrese la talla (35-44):"));
    } while (!(talla >= 35 && talla <= 44));
    return talla;
}

function seleccionarCantidad() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingrese la cantidad de pares a comprar (1-5):"));
    } while (!(cantidad >= 1 && cantidad <= 5));
    return cantidad;
}

function calcularTotal(precio, cantidad) {
    let total = precio * cantidad;
    if (cantidad >= 3) {
        total *= 0.90; 
        alert("Se ha aplicado un 10% de descuento.");
    }
    return total;
}

function realizarCompra() {
    let modelo = seleccionarModelo();
    let precioUnitario = obtenerPrecio(modelo);
    let talla = seleccionarTalla();
    let cantidad = seleccionarCantidad();
    let totalPagar = calcularTotal(precioUnitario, cantidad);

    alert(`Total a pagar $${totalPagar}`);
}

realizarCompra();
