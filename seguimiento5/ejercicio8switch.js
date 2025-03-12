function seleccionarCarrera() {
    let carrera;
    do {
        carrera = parseInt(prompt("Seleccione la carrera:\n1. Carrera 1 (Pilotos: A, B, C)"));
    } while (carrera !== 1);
    alert("Ha seleccionado Carrera 1.");
}

function verificarEdad() {
    let edad;
    do {
        edad = parseInt(prompt("Ingrese su edad:"));
    } while (isNaN(edad) || edad < 18);
}

function seleccionarTipoApuesta() {
    let tipoApuesta;
    do {
        tipoApuesta = parseInt(prompt("Seleccione el tipo de apuesta:\n1. Ganador de la carrera\n2. Posiciones exactas"));
    } while (tipoApuesta !== 1 && tipoApuesta !== 2);
    
    alert(`Ha seleccionado apostar por ${tipoApuesta === 1 ? "el ganador" : "posiciones exactas"}.`);
    return tipoApuesta;
}

function seleccionarPiloto() {
    let piloto;
    do {
        piloto = prompt("Ingrese la letra del piloto (A, B, C):").toUpperCase();
    } while (piloto !== "A" && piloto !== "B" && piloto !== "C");
    
    let cuota = piloto === "A" ? 1.5 : piloto === "B" ? 2.3 : 1.8;
    
    return { piloto, cuota };
}

function ingresarMonto() {
    let monto;
    do {
        monto = parseInt(prompt("Ingrese el monto a apostar ($10,000 - $1,000,000):"));
    } while (monto < 10000 || monto > 1000000);
    
    return monto;
}

function realizarApuesta() {
    seleccionarCarrera();
    verificarEdad();
    let tipoApuesta = seleccionarTipoApuesta();
    let { piloto, cuota } = seleccionarPiloto();
    let monto = ingresarMonto();
    
    let posibleGanancia = monto * cuota;

    alert("Apuesta registrada:");
    alert("Carrera: 1");
    alert("Tipo de apuesta: " + (tipoApuesta === 1 ? "Ganador" : "Posiciones exactas"));
    alert("Piloto elegido: " + piloto);
    alert("Monto apostado: $" + monto);
    alert("Posible ganancia: $" + posibleGanancia);
}

realizarApuesta();
