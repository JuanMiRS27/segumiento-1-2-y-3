alert("Buenas, ingrese [si] o [no] dependiendo de la reacción que tiene su computadora para determinar su estado");

let pitido, disco;

do {
    pitido = prompt("¿Su computadora emite un pitido al iniciarse? (si/no)").toLowerCase();
} while (pitido !== "si" && pitido !== "no");

do {
    disco = prompt("¿La unidad de disco duro de su computadora gira? (si/no)").toLowerCase();
} while (disco !== "si" && disco !== "no");

if (pitido === "si") {
    if (disco === "si") {
        alert("Póngase en contacto con el técnico de apoyo");
    } else {
        alert("Verificar contactos de la unidad");
    }
} else {
    if (disco === "si") {
        alert("Compruebe las conexiones de altavoces");
    } else {
        alert("Traiga la computadora para repararla en la central.");
    }
}
