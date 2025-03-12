let num1, num2, num3;

do {
    num1 = parseInt(prompt("Ingrese el primer número:"));
} while (isNaN(num1));

do {
    num2 = parseInt(prompt("Ingrese el segundo número:"));
} while (isNaN(num2));

do {
    num3 = parseInt(prompt("Ingrese el tercer número:"));
} while (isNaN(num3));

let mayor;

if (num1 >= num2) {
    if (num1 >= num3) {
        mayor = num1;
    } else {
        mayor = num3;
    }
} else {
    if (num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }
}

alert("El número mayor es: " + mayor);