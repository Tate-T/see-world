function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var eyeIcon = document.querySelector('.sign__iconi');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.src = './images/eye.svg'; 
      eyeIcon.alt = 'Hide Password';
    } else {
      passwordInput.type = 'password';
      eyeIcon.src = './images/eye-off.svg'; // Змінюємо зображення на відкрите око
      eyeIcon.alt = 'Show Password';
    }
  }

  function togglePasswordiVisibility() {
    var passwordInput = document.getElementById('passwordi');
    var eyeIcon = document.querySelector('.sign__icony');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.src = './images/eye.svg'; 
      eyeIcon.alt = 'Hide Passwordi';
    } else {
      passwordInput.type = 'password';
      eyeIcon.src = './images/eye-off.svg'; // Змінюємо зображення на відкрите око
      eyeIcon.alt = 'Show Passwordi';
    }
  }