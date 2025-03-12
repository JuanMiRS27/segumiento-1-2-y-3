alert(`Ingrese 1 valor para cada ángulo del triángulo`);

function obtenerAngulo(mensaje) {
    return parseInt(prompt(mensaje));
}

function validarTriangulo() {
    let angulo1, angulo2, angulo3, triangulo;
    
    do {
        angulo1 = obtenerAngulo("Ingrese el 1er Ángulo");
        angulo2 = obtenerAngulo("Ingrese el 2do Ángulo");
        angulo3 = obtenerAngulo("Ingrese el 3er Ángulo");
        triangulo = angulo1 + angulo2 + angulo3;
    } while (triangulo !== 180);
}

validarTriangulo();
alert("El triángulo es válido");
