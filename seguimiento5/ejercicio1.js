function solicitarNombre() {
    let nombre;
    do {
        nombre = prompt("Ingrese su nombre por favor");
    } while (!nombre);
    return nombre;
}

function solicitarHoras() {
    let horas;
    do {
        horas = prompt("Ingrese sus horas trabajadas por semana");
        horas = parseInt(horas, 10);
    } while (!(horas > 0));
    return horas;
}

function calcularSalario(horas) {
    return horas <= 10 ? horas * 30000 : horas * 33000;
}

function mostrarSalario() {
    alert("Hola");
    let nombre = solicitarNombre();
    let horas = solicitarHoras();
    let salario = calcularSalario(horas);
    
    alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}`);
}

mostrarSalario();