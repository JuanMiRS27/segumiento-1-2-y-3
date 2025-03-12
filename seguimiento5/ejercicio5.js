alert("Por favor, ingrese su nota del 1 al 10");

function obtenerNota(materia) {
    let nota;
    do {
        nota = parseInt(prompt(`Ingrese su Nota de ${materia} (1-10)`));
    } while (nota < 1 || nota > 10);
    return nota;
}

function calcularPorcentaje(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return (suma / 50) * 100;
}

function obtenerCalificacion(porcentaje) {
    if (porcentaje <= 59) {
        return "Mala";
    } else if (porcentaje >= 60 && porcentaje <= 80) {
        return "Buena";
    } else {
        return "Excelente";
    }
}

let notas = [
    obtenerNota("Física"),
    obtenerNota("Química"),
    obtenerNota("Biología"),
    obtenerNota("Matemáticas"),
    obtenerNota("Informática")
];

let porcentaje = calcularPorcentaje(notas);
let calificacion = obtenerCalificacion(porcentaje);

alert(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}`);