let genero;
do {
    genero = parseInt(prompt(`Ingrese su género:
    1: Hombre
    2: Mujer`));
} while (genero !== 1 && genero !== 2);

let edad;
do {
    edad = parseInt(prompt("Ingrese su edad (debe ser un número válido)"));
} while (isNaN(edad) || edad <= 0);

let ayuda = 0;

if (genero === 1) {
    ayuda = 40000;
} else if (genero === 2) {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30) {
        ayuda = 100000;
    }
}

if (ayuda > 0) {
    alert(`El valor de ayuda mensual es: $${ayuda}.`);
} else {
    alert("No recibe ayuda mensual.");
}