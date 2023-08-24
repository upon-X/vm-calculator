const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        // Borramos todo el contenido en la pantalla
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        // Eliminamos el ultimo digito en la pantalla y si no hay nada que borrar que ponga el 0 inicial
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
        pantalla.textContent = "0"
    } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1)
    }
    return;
}
        // Evalua conjuntos de strings que tengan operaciones matematicas 
        if (boton.id === "igual") {
    try {
        pantalla.textContent = eval(pantalla.textContent)
    } catch {
        pantalla.textContent = "Error!"
    }
    return;
}
// Añadimos lo que clickeemos
pantalla.textContent === "0" || pantalla.textContent === "Error!"
    ? pantalla.textContent = botonApretado
    : pantalla.textContent += botonApretado
    })
})