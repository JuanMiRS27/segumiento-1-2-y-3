let copias, precio, precioFinal;

do {
    copias = parseInt(prompt("Ingrese el número de copias que desea imprimir"));
} while (copias <= 0 || isNaN(copias));

if (copias <= 499) {
    precio = 120;
} else if (copias <= 749) {
    precio = 100;
} else if (copias <= 999) {
    precio = 80;
} else {
    precio = 50;
}

precioFinal = copias * precio;

alert(`Se van a imprimir ${copias} copias, las cuales valen $${precio} por copia. \nEl valor final por la impresión es $${precioFinal}`);
