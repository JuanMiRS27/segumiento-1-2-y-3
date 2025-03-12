alert("¡Bienvenido al Blackjack!");

function obtenerCarta() {
    return Math.floor(Math.random() * 11) + 1;
}

function jugarTurno(jugador) {
    let total = 0;
    let continuar;

    do {
        let carta = obtenerCarta();
        total += carta;
        alert(`${jugador}, sacaste un ${carta}. Tu total ahora es ${total}`);

        if (total >= 21) break;

        do {
            continuar = prompt(`${jugador}, ¿quieres otra carta? (si/no)`).toLowerCase();
        } while (continuar !== "si" && continuar !== "no");

    } while (continuar === "si");

    return total;
}

function determinarGanador(puntosJugador1, puntosJugador2) {
    if (puntosJugador1 > 21 && puntosJugador2 > 21) {
        alert("¡Ambos jugadores se pasaron! No hay ganador.");
    } else if (puntosJugador1 > 21) {
        alert("Jugador 1 se pasó de 21. ¡Jugador 2 gana!");
    } else if (puntosJugador2 > 21) {
        alert("Jugador 2 se pasó de 21. ¡Jugador 1 gana!");
    } else if (puntosJugador1 > puntosJugador2) {
        alert("¡Jugador 1 gana!");
    } else if (puntosJugador2 > puntosJugador1) {
        alert("¡Jugador 2 gana!");
    } else {
        alert("¡Empate!");
    }
}

function jugarBlackjack() {
    let puntosJugador1 = jugarTurno("Jugador 1");
    let puntosJugador2 = jugarTurno("Jugador 2");

    determinarGanador(puntosJugador1, puntosJugador2);
}

jugarBlackjack();