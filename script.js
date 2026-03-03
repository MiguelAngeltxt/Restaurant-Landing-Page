
// Espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", function () {

    // Selecciona el formulario
    const form = document.querySelector(".form");

    // Escucha el evento submit
    form.addEventListener("submit", function (event) {

        // Evita que la página se recargue
        event.preventDefault();

        // Obtiene los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const direccion = document.getElementById("direccion").value;

        // Validación básica
        if (nombre === "" || telefono === "" || direccion === "") {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Mensaje de confirmación
        alert(`Gracias ${nombre}! Tu pedido será enviado a ${direccion}.`);

        // Limpia el formulario
        form.reset();
    });

});