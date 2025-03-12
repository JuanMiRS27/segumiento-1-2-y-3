let tarifaDiaria;
let totalPagar = 0;
let categoria;

do {
    categoria = parseInt(prompt("Seleccione la categoría del libro:\n1. Bestsellers ($500/día)\n2. Literatura ($100/día)\n3. Académicos (Gratuito)"));
} while (categoria !== 1 && categoria !== 2 && categoria !== 3);

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

let cantidadLibros;
do {
    cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros a solicitar (máximo 5):"));
} while (cantidadLibros < 1 || cantidadLibros > 5);

let diasPrestamo;
do {
    diasPrestamo = parseInt(prompt("Ingrese la cantidad de días del préstamo (1-30):"));
} while (diasPrestamo < 1 || diasPrestamo > 30);

totalPagar = tarifaDiaria * cantidadLibros * diasPrestamo;

if (diasPrestamo > 10 && tarifaDiaria > 0) {
    totalPagar *= 0.90;
    alert("Se ha aplicado un 10% de descuento por préstamo mayor a 10 días.");
}

alert("Total a pagar: $" + totalPagar);