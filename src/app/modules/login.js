// Función para guardar el correo y contraseña en localStorage
function guardarcorreo() {
  const contrasena = document
    .getElementById("registrar_contrasena")
    .value.trim(); // .trim() para eliminar espacios en blanco
  const correo = document.getElementById("registrar_correo").value.trim(); // .trim() para eliminar espacios en blanco

  if (!contrasena || !correo) {
    alert("No debe dejar campos vacíos");
    return;
  }

  // Obtener los datos existentes de localStorage, si existen
  const almacenado = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar si el correo ya está registrado
  const existeCorreo = almacenado.some((usuario) => usuario.correo === correo);
  if (existeCorreo) {
    alert("El correo ya está registrado");
    return;
  }

  // Agregar el nuevo usuario al array
  almacenado.push({ contrasena: contrasena, correo: correo });

  // Guardar el array actualizado en localStorage
  localStorage.setItem("usuarios", JSON.stringify(almacenado));

  alert("Correo registrado");

  // Ocultar el registro y mostrar el login
  document.getElementById("registro").style.display = "none";
  document.getElementById("login").style.display = "block";
}

// Función para verificar el correo y la contraseña en el inicio de sesión
function ingresar() {
  const correo = document.getElementById("correo").value.trim(); // Elimina espacios en blanco
  const contrasena = document.getElementById("contrasena").value.trim(); // .trim() para eliminar espacios en blanco

  if (!correo || !contrasena) {
    alert("Debe ingresar correo y contraseña");
    return; // Asegúrate de salir de la función si algún campo está vacío
  }

  // Obtener los datos almacenados en localStorage
  const almacenado = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar si el correo existe en el array
  const usuario = almacenado.find((usuario) => usuario.correo === correo);

  console.log("Correo ingresado:", correo); // Depuración
  console.log("Datos almacenados:", almacenado); // Depuración

  if (usuario) {
    // Verificar la contraseña
    if (usuario.contrasena === contrasena) {
      // Guardar el usuario actual en sessionStorage
      sessionStorage.setItem("usuarioActual", JSON.stringify(usuario));
      window.location.href = "/src/index.html";
    } else {
      alert("Contraseña incorrecta");
    }
  } else {
    alert("Correo no registrado");
  }
}

// Mostrar registro al hacer clic en "inscribirse"
document.getElementById("ingresar").addEventListener("click", () => {
  document.getElementById("login").style.display = "none";
  document.getElementById("registro").style.display = "block";
});
