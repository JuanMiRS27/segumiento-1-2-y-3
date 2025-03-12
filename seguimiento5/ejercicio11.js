alert("Buenas, ingrese [si] o [no] dependiendo de la reacción que tiene su computadora para determinar su estado");

function obtenerRespuesta(pregunta) {
    let respuesta;
    do {
        respuesta = prompt(pregunta).toLowerCase();
    } while (respuesta !== "si" && respuesta !== "no");
    return respuesta;
}

function diagnosticarComputadora() {
    let pitido = obtenerRespuesta("¿Su computadora emite un pitido al iniciarse? (si/no)");
    let disco = obtenerRespuesta("¿La unidad de disco duro de su computadora gira? (si/no)");

    if (pitido === "si") {
        alert(disco === "si" ? "Póngase en contacto con el técnico de apoyo" : "Verificar contactos de la unidad");
    } else {
        alert(disco === "si" ? "Compruebe las conexiones de altavoces" : "Traiga la computadora para repararla en la central.");
    }
}

diagnosticarComputadora();
