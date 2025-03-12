let modelo;

do {
    modelo = parseInt(prompt("Ingrese el modelo de su vehículo"));
} while (isNaN(modelo));

if (modelo === 119 || modelo === 179 || modelo === 189 || modelo === 195 || modelo === 221 || modelo === 780) {
    alert("Su vehículo está defectuoso, llevar a garantía");
} else {
    alert("Su vehículo no está defectuoso");
}
