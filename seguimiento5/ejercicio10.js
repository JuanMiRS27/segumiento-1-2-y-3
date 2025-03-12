function obtenerCopias() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingrese el número de copias que desea imprimir"));
    } while (cantidad <= 0 || isNaN(cantidad));
    return cantidad;
}

function calcularPrecio(copias) {
    if (copias <= 499) return 120;
    if (copias <= 749) return 100;
    if (copias <= 999) return 80;
    return 50;
}

function calcularPrecioFinal() {
    let copias = obtenerCopias();
    let precio = calcularPrecio(copias);
    let precioFinal = copias * precio;
    
    alert(`Se van a imprimir ${copias} copias, las cuales valen $${precio} por copia. \nEl valor final por la impresión es $${precioFinal}`);
}

calcularPrecioFinal();
