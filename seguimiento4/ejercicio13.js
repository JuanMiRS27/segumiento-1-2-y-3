alert("Bienvenido a CeluMovil");

let operador;
do {
    operador = prompt(`Ingrese su Operador: \n tigo \n claro \n movistar`).toLowerCase();
} while (operador !== "tigo" && operador !== "claro" && operador !== "movistar");

let minutos;
do {
    minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales usados"));
} while (isNaN(minutos) || minutos < 0);

let plan;
do {
    plan = prompt("¿Posee plan de datos? [si] [no]").toLowerCase();
} while (plan !== "si" && plan !== "no");

let cargoFijo, minutoTotal, precioFinal;

if (operador === "tigo") {
    cargoFijo = 45000;
    minutoTotal = minutos * 200;
    precioFinal = cargoFijo + minutoTotal + (plan === "si" ? 12000 : 0);
} else if (operador === "claro") {
    cargoFijo = 30000;
    minutoTotal = minutos * 100;
    precioFinal = cargoFijo + minutoTotal + (plan === "si" ? 18000 : 0);
} else if (operador === "movistar") {
    cargoFijo = 40000;
    minutoTotal = minutos * 250;
    precioFinal = cargoFijo + minutoTotal + (plan === "si" ? 8000 : 0);
}

alert(`El Costo Total del plan de Febrero es ${precioFinal}`);
