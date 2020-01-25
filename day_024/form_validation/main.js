const form = document.getElementById('main-form');
const uname = document.getElementById('uname');
const password = document.getElementById('password');
const errorElement = document.getElementById('error');

form.addEventListener('submit', function(e) {
  let message = [];
  if (uname.value === '' || uname.value == null) {
    message.push('Please Provide an User Name');
  }

  if (password.value === '' || password.value == null) {
    message.push('Please Enter the password');
  }

  if (password.value.length <= 6) {
    message.push('Passsword Must be 6 characters long');
  }

  if (password.value.length >= 20) {
    message.push('Passsword Must be less than 20 characters');
  }

  if (message.length > 0) {
    e.preventDefault;
  }

  e.preventDefault();
  errorElement.innerHTML = message.join(', ');
});
