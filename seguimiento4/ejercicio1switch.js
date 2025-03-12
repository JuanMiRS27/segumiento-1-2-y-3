const PRECIO_BASICO = 2000;
const PRECIO_PREMIUM = 4000;

const OPCION_BASICA = 1;
const OPCION_PREMIUM = 2;

let costoUnitario;
let piezas;
let opcionSeleccionada;

do {
    opcionSeleccionada = parseInt(prompt("Seleccione tipo de servicio: \n1. Básico ($2000 c/u) \n2. Premium ($4000 c/u)"));
} while (opcionSeleccionada !== OPCION_BASICA && opcionSeleccionada !== OPCION_PREMIUM);

costoUnitario = (opcionSeleccionada === OPCION_BASICA) ? PRECIO_BASICO : PRECIO_PREMIUM;

do {
    piezas = parseInt(prompt("Ingrese cantidad de piezas (1-20):"));
} while (!(piezas >= 1 && piezas <= 20));

console.log("Costo total: $" + (costoUnitario * piezas));