alert("Bienvenido a SandwichOrder");

let tamaño;
do {
    tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
} while (tamaño !== "pequeño" && tamaño !== "grande");

let costo = tamaño === "pequeño" ? 6000 : 12000;

let tocineta, jalapeño, pavo, queso;

do {
    tocineta = prompt("¿Desea agregar tocineta? (si/no)").toLowerCase();
} while (tocineta !== "si" && tocineta !== "no");

do {
    jalapeño = prompt("¿Desea agregar jalapeño? (si/no)").toLowerCase();
} while (jalapeño !== "si" && jalapeño !== "no");

do {
    pavo = prompt("¿Desea agregar pavo? (si/no)").toLowerCase();
} while (pavo !== "si" && pavo !== "no");

do {
    queso = prompt("¿Desea agregar queso? (si/no)").toLowerCase();
} while (queso !== "si" && queso !== "no");

if (tocineta === "si") costo += 3000;
if (pavo === "si") costo += 3000;
if (queso === "si") costo += 2500;

alert("El costo total de su sándwich es: " + costo);
