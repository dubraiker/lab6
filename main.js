// Seleccionar el formulario
const formulario = document.querySelector("#contacto");

if (formulario) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const descripcion = document.getElementById("mensage").value;
        const correo = document.getElementById("correo").value;
        const numero = document.getElementById("telefono").value;

        console.log("Nombre:", nombre);
        console.log("Correo:", correo);
        console.log("Celular:", numero);
        console.log("Mensaje:", descripcion);

        alert("Hola " + nombre +
            ", tu correo es " + correo +
            ", tu motivo de contacto es: " + descripcion);
    });
} else {
    console.error("No se pudo encontrar el formulario con el ID #contacto");
}