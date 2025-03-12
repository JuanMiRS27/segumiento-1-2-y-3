function seleccionarCategoria() {
    let categoria;
    do {
        categoria = parseInt(prompt("Seleccione la categoría del libro:\n1. Bestsellers ($500/día)\n2. Literatura ($100/día)\n3. Académicos (Gratuito)"));
    } while (categoria !== 1 && categoria !== 2 && categoria !== 3);

    let tarifaDiaria;
    switch (categoria) {
        case 1:
            alert("Ha seleccionado Bestsellers.");
            tarifaDiaria = 500;
            break;
        case 2:
            alert("Ha seleccionado Literatura.");
            tarifaDiaria = 100;
            break;
        case 3:
            alert("Ha seleccionado Académicos.");
            tarifaDiaria = 0;
            break;
    }

    return tarifaDiaria;
}

function solicitarCantidadLibros() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingrese la cantidad de libros a solicitar (máximo 5):"));
    } while (cantidad < 1 || cantidad > 5);
    return cantidad;
}

function solicitarDiasPrestamo() {
    let dias;
    do {
        dias = parseInt(prompt("Ingrese la cantidad de días del préstamo (1-30):"));
    } while (dias < 1 || dias > 30);
    return dias;
}

function calcularTotal(tarifaDiaria, cantidadLibros, diasPrestamo) {
    let total = tarifaDiaria * cantidadLibros * diasPrestamo;
    
    if (diasPrestamo > 10 && tarifaDiaria > 0) {
        total *= 0.90;
        alert("Se ha aplicado un 10% de descuento por préstamo mayor a 10 días.");
    }

    return total;
}

function realizarPrestamo() {
    let tarifaDiaria = seleccionarCategoria();
    let cantidadLibros = solicitarCantidadLibros();
    let diasPrestamo = solicitarDiasPrestamo();
    let totalPagar = calcularTotal(tarifaDiaria, cantidadLibros, diasPrestamo);

    alert("Total a pagar: $" + totalPagar);
}

realizarPrestamo();
