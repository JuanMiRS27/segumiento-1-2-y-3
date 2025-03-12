alert(`Ingrese 1 valor para cada ángulo del triángulo`);

let angulo1, angulo2, angulo3, triangulo;

do {
    angulo1 = parseInt(prompt("Ingrese el 1er Ángulo"));
    angulo2 = parseInt(prompt("Ingrese el 2do Ángulo"));
    angulo3 = parseInt(prompt("Ingrese el 3er Ángulo"));
    triangulo = angulo1 + angulo2 + angulo3;
} while (triangulo !== 180);

alert("El triángulo es válido");