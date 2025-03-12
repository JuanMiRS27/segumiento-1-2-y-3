let tipolavadora;
let cantidad;
let horas;

do {
    tipolavadora = prompt(`Ingrese el tipo de lavadora que desea alquilar:
    1: Lavadora Grande [Costo por Hora: $4000]
    2: Lavadora Pequeña [Costo por Hora: $3000]`);
} while (tipolavadora != 1 && tipolavadora != 2); 


do {
    cantidad = prompt("Ingrese cuántas lavadoras va a alquilar");
    cantidad = parseInt(cantidad, 10);
} while (!(cantidad > 0)); 


do {
    horas = prompt("Ingrese el número de horas en el que va a utilizar las lavadoras");
    horas = parseInt(horas, 10);
} while (!(horas > 0)); 

let costobase, tipo, costotal;

if (tipolavadora == 1) { 
    costobase = 4000;
    tipo = "Lavadora Grande";
} else {
    costobase = 3000;
    tipo = "Lavadora Pequeña";
}

costotal = cantidad * costobase * horas;
if (cantidad > 3) {
    costotal -= costotal * 0.03; 
}

alert(`Costo total por alquilar ${cantidad} ${tipo} por ${horas} horas: $${parseInt(costotal)}`);


