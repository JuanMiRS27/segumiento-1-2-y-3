const contarVocales = str => {
    str = str.toLowerCase();
    let vocales = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vocales++;
        }
    }
    return vocales;
}

console.log(contarVocales("Skibidi"));       
console.log(contarVocales("Funciones Flecha"));   
console.log(contarVocales("Aaaaah"));         
console.log(contarVocales("Iron Man"));      
