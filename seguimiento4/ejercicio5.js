alert("Por favor, ingrese su nota del 1 al 10");

let fisica, quimica, biologia, matematicas, informatica;

do {
    fisica = parseInt(prompt("Ingrese su Nota de Física (1-10)"));
} while (fisica < 1 || fisica > 10);

do {
    quimica = parseInt(prompt("Ingrese su Nota de Química (1-10)"));
} while (quimica < 1 || quimica > 10);

do {
    biologia = parseInt(prompt("Ingrese su Nota de Biología (1-10)"));
} while (biologia < 1 || biologia > 10);

do {
    matematicas = parseInt(prompt("Ingrese su Nota de Matemáticas (1-10)"));
} while (matematicas < 1 || matematicas > 10);

do {
    informatica = parseInt(prompt("Ingrese su Nota de Informática (1-10)"));
} while (informatica < 1 || informatica > 10);

let porcentaje = (((fisica + quimica + biologia + matematicas + informatica) / 50) * 100);
let calificacion;

if (porcentaje <= 59) {
    calificacion = "Mala";
} else if (porcentaje >= 60 && porcentaje <= 80) {
    calificacion = "Buena";
} else {
    calificacion = "Excelente";
}

alert(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}`);