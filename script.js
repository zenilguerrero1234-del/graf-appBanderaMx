
// Obtener el slider verde

const sliderVerde =
    document.getElementById("sliderVerde");


// Obtener el slider rojo

const sliderRojo =
    document.getElementById("sliderRojo");


// Obtener la franja verde

const franjaVerde =
    document.getElementById("franjaVerde");


// Obtener la franja roja

const franjaRoja =
    document.getElementById("franjaRoja");


// Obtener el código hexadecimal verde

const codigoVerde =
    document.getElementById("codigoVerde");


// Obtener el código hexadecimal rojo

const codigoRojo =
    document.getElementById("codigoRojo");


// Cambiar el color verde cuando se mueve el slider

sliderVerde.addEventListener("input", function () {

    // Obtener el valor del slider

    let valor =
        Number(sliderVerde.value);


    // Convertir el valor a hexadecimal

    let hexadecimal =
        valor.toString(16)
        .padStart(2, "0")
        .toUpperCase();


    // Crear el código del color verde

    let color =
        "#00" + hexadecimal + "00";


    // Cambiar el color de la franja

    franjaVerde.style.backgroundColor =
        color;


    // Mostrar el código hexadecimal

    codigoVerde.textContent =
        color;

});


// Cambiar el color rojo cuando se mueve el slider

sliderRojo.addEventListener("input", function () {

    // Obtener el valor del slider

    let valor =
        Number(sliderRojo.value);


    // Convertir el valor a hexadecimal

    let hexadecimal =
        valor.toString(16)
        .padStart(2, "0")
        .toUpperCase();


    // Crear el código del color rojo

    let color =
        "#" + hexadecimal + "0000";


    // Cambiar el color de la franja

    franjaRoja.style.backgroundColor =
        color;


    // Mostrar el código hexadecimal

    codigoRojo.textContent =
        color;

});

