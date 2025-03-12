alert("Bienvenido a CeluMovil");

function obtenerOperador() {
    let operador;
    do {
        operador = prompt(`Ingrese su Operador: \n tigo \n claro \n movistar`).toLowerCase();
    } while (!["tigo", "claro", "movistar"].includes(operador));
    return operador;
}

function obtenerMinutos() {
    let minutos;
    do {
        minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales usados"));
    } while (isNaN(minutos) || minutos < 0);
    return minutos;
}

function poseePlanDatos() {
    let plan;
    do {
        plan = prompt("¿Posee plan de datos? [si] [no]").toLowerCase();
    } while (plan !== "si" && plan !== "no");
    return plan === "si";
}

function calcularCosto(operador, minutos, tienePlan) {
    const tarifas = {
        tigo: { cargoFijo: 45000, costoMinuto: 200, costoPlan: 12000 },
        claro: { cargoFijo: 30000, costoMinuto: 100, costoPlan: 18000 },
        movistar: { cargoFijo: 40000, costoMinuto: 250, costoPlan: 8000 }
    };

    let { cargoFijo, costoMinuto, costoPlan } = tarifas[operador];
    return cargoFijo + (minutos * costoMinuto) + (tienePlan ? costoPlan : 0);
}

function calcularPlanMensual() {
    let operador = obtenerOperador();
    let minutos = obtenerMinutos();
    let tienePlan = poseePlanDatos();
    let precioFinal = calcularCosto(operador, minutos, tienePlan);

    alert(`El Costo Total del plan de Febrero es ${precioFinal}`);
}

calcularPlanMensual();
