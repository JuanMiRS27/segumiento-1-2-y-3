let carta1 = Math.floor(Math.random() * 11) + 1;
let carta2 = Math.floor(Math.random() * 11) + 1;
let totalJugador = carta1 + carta2;

alert("Tus cartas: " + carta1 + " y " + carta2);
alert("Total: " + totalJugador);

if (totalJugador === 21) {
    alert("¡Blackjack! Ganaste.");
} else if (totalJugador > 21) {
    alert("Te pasaste de 21. Perdiste.");
} else {
    let decision;
    do {
        decision = parseInt(prompt("Tu total es " + totalJugador + ". ¿Quieres otra carta?\n1. Sí\n2. No"));
    } while (decision !== 1 && decision !== 2);

    while (decision === 1) {
        let nuevaCarta = Math.floor(Math.random() * 11) + 1;
        totalJugador += nuevaCarta;
        alert("Nueva carta: " + nuevaCarta);
        alert("Nuevo total: " + totalJugador);

        if (totalJugador === 21) {
            alert("¡Blackjack! Ganaste.");
            break;
        } else if (totalJugador > 21) {
            alert("Te pasaste de 21. Perdiste.");
            break;
        }

        do {
            decision = parseInt(prompt("Tu total es " + totalJugador + ". ¿Quieres otra carta?\n1. Sí\n2. No"));
        } while (decision !== 1 && decision !== 2);
    }

    if (decision === 2) {
        alert("Te plantas con " + totalJugador);
    }
}
