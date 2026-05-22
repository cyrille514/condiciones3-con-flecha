     // Función flecha 
const esPalabraBonita = (texto) => {
    const longitud = texto.length;
    
    if (longitud === 9 && texto.startsWith('h')) {
        return true; // 9 letras y empieza por H
    } else if (longitud === 5 && texto.startsWith('p')) {
        return true; // 5 letras y empieza por P
    } else {
        return false; // No cumple ninguna regla
    }
};

// 2. Función flecha para procesar el formulario y actualizar el párrafo del DOM
const analizarPalabra = (evento) => {
    // Evitar que la página se recargue al enviar el formulario
    evento.preventDefault();

    // Capturar elementos de la interfaz
    const palabraInput = document.getElementById("palabra");
    const resultadoParrafo = document.getElementById("parrafoResultado");

    // Limpiar espacios vacíos y pasar a minúsculas para evaluar correctamente
    const palabraOriginal = palabraInput.value.trim();
    const palabraLimpia = palabraOriginal.toLowerCase();

    // Invocar la función flecha de validación
    const esBonita = esPalabraBonita(palabraLimpia);

    // Modificar el párrafo
    if (esBonita) {
        resultadoParrafo.innerText = `¡Sí! La palabra "${palabraOriginal}" es bonita.`;
        resultadoParrafo.className = "mt-6 p-4 rounded-lg text-center font-semibold bg-pink-100 text-pink-800 border border-pink-200 block";
    } else {
        resultadoParrafo.innerText = `Lo sentimos, la palabra "${palabraOriginal}" no es bonita.`;
        resultadoParrafo.className = "mt-6 p-4 rounded-lg text-center font-semibold bg-slate-100 text-slate-600 border border-slate-200 block";
    }
};
