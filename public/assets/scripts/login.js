window.addEventListener('load', function() {
  if (window.location.hash === '#signup') {
    document.getElementById('flip').checked = true;
  }
});

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  login();
});

document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();
  register();
});

function login() {
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;

  // Verificar si las credenciales coinciden con las almacenadas
  if (localStorage.getItem(email) === password) {
    // Credenciales válidas, redirigir al usuario a la página principal
    window.location.href = 'index.html';
  } else {
    // Credenciales inválidas, mostrar mensaje de error
    alert('Credenciales inválidas.');
  }
}

function register() {
  var name = document.getElementById('register-name').value;
  var email = document.getElementById('register-email').value;
  var password = document.getElementById('register-password').value;

  // Verificar si el correo electrónico ya está registrado
  if (localStorage.getItem(email)) {
    // Correo electrónico ya existe, mostrar mensaje de error
    alert('El correo electrónico ya está registrado.');
  } else {
    // Verificar la estructura del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Ingrese un correo electrónico válido.');
      return;
    }

    // Verificar que el nombre no contenga números
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      alert('El nombre no debe contener números.');
      return;
    }
    // Verificar si la contraseña cumple con los requisitos de seguridad
      if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
      }
    // Almacenar las credenciales en el almacenamiento local
    localStorage.setItem(email, password);
    alert('Registro exitoso. Ahora puedes iniciar sesión.');

     // Limpiar los campos de texto
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
  }
}

