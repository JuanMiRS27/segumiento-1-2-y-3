alert("hola");
let hora;
let nombre;
do {
    nombre = prompt("Ingrese su nombre por favor");
} while (!nombre); 


do {
    hora = prompt("Ingrese sus horas trabajadas por semana");
    hora = parseInt(hora, 10);
} while (!(hora > 0));


if (hora <= 10) {
    resultado = hora * 30000;
} else {
    resultado = hora * 33000;
}

alert("Señor/a " + nombre + ", el número de horas es " + hora + " y su salario equivale a $" + resultado);