// Simulador interactivo de JavaScript

// Función para verificar si un número es par o impar
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

// Función para generar una tabla de multiplicar
function TablaMultiplicar(numero) {
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero}*${i} = ${numero * i}\n`;
    }
    return tabla;
}

// Simulación principal
alert("Bienvenido al Simulador Interactivo de JavaScript De Guada");

// Solicitar entrada al usuario
let entradaUsuario = prompt("Ingresa un número:");

// Verificar si la entrada es un número
if (!isNaN(entradaUsuario)) {
    const numero = parseInt(entradaUsuario);

    // Verificar si el número es par o impar
    alert (`El  ${numero} es ${verificarParImpar(numero)}.`);

    // Generar y mostrar la tabla de multiplicar
    alert(`Tabla de Multiplicar para ${numero}:\n${TablaMultiplicar(numero)}`);
} else {
    alert("Entrada inválida. Por favor, ingresa un número válido.");
}