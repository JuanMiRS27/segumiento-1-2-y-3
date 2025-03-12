function obtenerModelo() {
    let modelo;
    do {
        modelo = parseInt(prompt("Ingrese el modelo de su vehículo"));
    } while (isNaN(modelo));
    return modelo;
}

function verificarDefecto(modelo) {
    const modelosDefectuosos = [119, 179, 189, 195, 221, 780];
    return modelosDefectuosos.includes(modelo);
}

function diagnosticarVehiculo() {
    let modelo = obtenerModelo();
    if (verificarDefecto(modelo)) {
        alert("Su vehículo está defectuoso, llevar a garantía");
    } else {
        alert("Su vehículo no está defectuoso");
    }
}

diagnosticarVehiculo();
