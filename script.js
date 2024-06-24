document.querySelector('#toggleSignupPassword').addEventListener('click', function (e) {
    const passwordField = document.querySelector('#signupPassword');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    e.target.classList.toggle('fa-eye-slash');
  });

  document.querySelector('#toggleLoginPassword').addEventListener('click', function (e) {
    const passwordField = document.querySelector('#loginPassword');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    e.target.classList.toggle('fa-eye-slash');
  });