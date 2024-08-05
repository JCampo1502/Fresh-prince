document.addEventListener("DOMContentLoaded", function () {
    const loginImage = document.getElementById("loginImage");
    const modal = document.getElementById("loginModal");
    const closeButton = document.querySelector(".close");
    const loginForm = document.getElementById("loginForm");
    const errorElement = document.getElementById("error");

    loginImage.addEventListener("click", function () {
      modal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera del modal
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el envío del formulario

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Obtener datos del localStorage
      const users = JSON.parse(localStorage.getItem("usuarios")) || [];

      // Verificar si el usuario existe
      const userExists = users.some(
        (user) => user.correo === email && user.contrasena === password
      );

      if (userExists) {
        errorElement.textContent = "¡Login exitoso!";
        // Aquí puedes redirigir a otra página o realizar otra acción
      } else {
        errorElement.textContent = "Correo o contraseña incorrectos.";
      }
    });
  });