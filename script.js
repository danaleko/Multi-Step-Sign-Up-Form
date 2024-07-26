document.addEventListener('DOMContentLoaded', function() {

  const registerContainer = document.getElementById('register-container');
  const loginContainer = document.getElementById('login-container');
  const finalContainer = document.getElementById('final-container');
  const nextToLogin = document.getElementById('next-to-login');
  const prevToRegister = document.getElementById('prev-to-register');
  const nextToFinal = document.getElementById('next-to-final');
  const prevToLoginFinal = document.getElementById('prev-to-login-final');

  nextToLogin.addEventListener('click', function() {
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
  });

  prevToRegister.addEventListener('click', function() {
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
  });

  nextToFinal.addEventListener('click', function() {
    loginContainer.style.display = 'none';
    finalContainer.style.display = 'block';
  });

  prevToLoginFinal.addEventListener('click', function() {
    finalContainer.style.display = 'none';
    loginContainer.style.display = 'block';
  });

});