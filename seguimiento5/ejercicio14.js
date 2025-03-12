alert("Bienvenido a SandwichOrder");

function obtenerTamaño() {
    let tamaño;
    do {
        tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
    } while (!["pequeño", "grande"].includes(tamaño));
    return tamaño;
}

function obtenerIngrediente(nombre) {
    let respuesta;
    do {
        respuesta = prompt(`¿Desea agregar ${nombre}? (si/no)`).toLowerCase();
    } while (respuesta !== "si" && respuesta !== "no");
    return respuesta === "si";
}

function calcularCosto() {
    let tamaño = obtenerTamaño();
    let costo = tamaño === "pequeño" ? 6000 : 12000;

    let ingredientes = {
        tocineta: 3000,
        jalapeño: 0, 
        pavo: 3000,
        queso: 2500
    };

    for (let ingrediente in ingredientes) {
        if (obtenerIngrediente(ingrediente)) {
            costo += ingredientes[ingrediente];
        }
    }

    alert("El costo total de su sándwich es: " + costo);
}

calcularCosto();
