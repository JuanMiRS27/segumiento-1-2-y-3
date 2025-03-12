let precioClasicos = 500000;
let precioRunning = 800000;
let precioBasketball = 1000000;
let modeloSeleccionado;
let precioUnitario;

do {
    modeloSeleccionado = parseInt(prompt("Seleccione el modelo de tenis:\n1. Clásicos [$500.000]\n2. Running [$800.000]\n3. Basketball [$1.000.000]"));
} while (modeloSeleccionado !== 1 && modeloSeleccionado !== 2 && modeloSeleccionado !== 3); 

switch (modeloSeleccionado) {
    case 1:
        precioUnitario = precioClasicos;
        alert("Se ha seleccionado tenis Clásicos.");
        break;
    case 2:
        precioUnitario = precioRunning;
        alert("Se ha seleccionado tenis Running.");
        break;
    case 3:
        precioUnitario = precioBasketball;
        alert("Se ha seleccionado tenis Basketball.");
        break;
}

let talla;
do {
    talla = parseInt(prompt("Ingrese la talla (35-44):"));
} while (!(talla >= 35 && talla <= 44)); 

let cantidad;
do {
    cantidad = parseInt(prompt("Ingrese la cantidad de pares a comprar (1-5):"));
} while (!(cantidad >= 1 && cantidad <= 5)); 

let totalPagar = precioUnitario * cantidad;
if (cantidad >= 3) {
    totalPagar *= 0.90; 
    alert("Se ha aplicado un 10% de descuento.");
}

alert(`Total a pagar $${totalPagar}`);