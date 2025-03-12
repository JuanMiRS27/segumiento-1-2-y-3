function obtenerPlan() {
    let plan;
    do {
        plan = parseInt(prompt(`Ingrese su plan de membresía deseado \n 1: 15 días \n 2: 30 días \n 3: 3 Meses`));
    } while (plan !== 1 && plan !== 2 && plan !== 3);
    return plan;
}

function obtenerCostoYDias(plan) {
    if (plan == 1) {
        return { costo: 18000, dias: "15 Días" };
    } else if (plan == 2) {
        return { costo: 35000, dias: "30 Días" };
    } else {
        return { costo: 86000, dias: "3 Meses" };
    }
}

let plan = obtenerPlan();
let { costo, dias } = obtenerCostoYDias(plan);

alert(`El costo de la mensualidad es ${costo} y su plan es por ${dias}`);
