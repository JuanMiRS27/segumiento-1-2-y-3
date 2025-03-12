let precioBase;
let precioAdicional = 0;
let modelo;

do {
    modelo = parseInt(prompt("Seleccione el modelo de escoba:\n1. Escoba dura\n2. Escoba suave\n3. Cepillo"));
} while (modelo !== 1 && modelo !== 2 && modelo !== 3);

switch (modelo) {
    case 1:
        alert("Ha seleccionado Escoba dura.");
        break;
    case 2:
        alert("Ha seleccionado Escoba suave.");
        break;
    case 3:
        alert("Ha seleccionado Cepillo.");
        break;
}

let material;
do {
    material = parseInt(prompt("Seleccione el material:\n1. Cerdas sintéticas\n2. Cerdas naturales"));
} while (material !== 1 && material !== 2);

switch (material) {
    case 1:
        alert("Ha seleccionado Cerdas sintéticas.");
        if (modelo === 1) {
            precioBase = 8000;
        } else if (modelo === 3) {
            precioBase = 12000;
        }
        break;
    case 2:
        alert("Ha seleccionado Cerdas naturales.");
        if (modelo === 1) {
            precioBase = 10000;
        } else if (modelo === 3) {
            precioBase = 15000;
        }
        break;
}

let opcionAdicional;
do {
    opcionAdicional = parseInt(prompt("Seleccione una opción adicional:\n1. Mango largo (+$2.000)\n2. Gancho en punta (+$500)\n3. Ninguna"));
} while (opcionAdicional !== 1 && opcionAdicional !== 2 && opcionAdicional !== 3);

switch (opcionAdicional) {
    case 1:
        alert("Ha seleccionado Mango largo.");
        precioAdicional = 2000;
        break;
    case 2:
        alert("Ha seleccionado Gancho en punta.");
        precioAdicional = 500;
        break;
    case 3:
        alert("Sin opciones adicionales.");
        break;
}

let cantidad;
do {
    cantidad = parseInt(prompt("Ingrese la cantidad de escobas a fabricar (mínimo 3, máximo 30):"));
} while (cantidad < 3 || cantidad > 30);

let totalPagar = (precioBase + precioAdicional) * cantidad;
alert("Total a pagar: $" + totalPagar);