let carrera;
do {
    carrera = parseInt(prompt("Seleccione la carrera:\n1. Carrera 1 (Pilotos: A, B, C)"));
} while (carrera !== 1);

alert("Ha seleccionado Carrera 1.");

let edad;
do {
    edad = parseInt(prompt("Ingrese su edad:"));
} while (isNaN(edad) || edad < 18);

let tipoApuesta;
do {
    tipoApuesta = parseInt(prompt("Seleccione el tipo de apuesta:\n1. Ganador de la carrera\n2. Posiciones exactas"));
} while (tipoApuesta !== 1 && tipoApuesta !== 2);

switch (tipoApuesta) {
    case 1:
        alert("Ha seleccionado apostar por el ganador.");
        break;
    case 2:
        alert("Ha seleccionado apostar por posiciones exactas.");
        break;
}

let piloto;
do {
    piloto = prompt("Ingrese la letra del piloto (A, B, C):").toUpperCase();
} while (piloto !== "A" && piloto !== "B" && piloto !== "C");

let cuota;
switch (piloto) {
    case "A":
        cuota = 1.5;
        break;
    case "B":
        cuota = 2.3;
        break;
    case "C":
        cuota = 1.8;
        break;
}

let monto;
do {
    monto = parseInt(prompt("Ingrese el monto a apostar ($10,000 - $1,000,000):"));
} while (monto < 10000 || monto > 1000000);

alert("Apuesta registrada:");
alert("Carrera: 1");
alert("Tipo de apuesta: " + (tipoApuesta === 1 ? "Ganador" : "Posiciones exactas"));
alert("Piloto elegido: " + piloto);
alert("Monto apostado: $" + monto);
alert("Posible ganancia: $" + (monto * cuota));