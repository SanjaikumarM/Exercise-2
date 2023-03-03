const form = document.querySelector('#registrationForm');
const submitBtn = document.querySelector('#submitBtn');
const validationResults = document.querySelector('#validationResults');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
  
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  
  let isValid = true;
  let validationMsg = '';
  if (name === '') {
    validationMsg += 'Please enter your name.<br>';
    isValid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    validationMsg += 'Please enter your email address.<br>';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    validationMsg += 'Please enter a valid email address.<br>';
    isValid = false;
  }
  if (password.length < 8) {
    validationMsg += 'Password must be at least 8 characters long.<br>';
    isValid = false;
  }
  if (isValid) {
    validationResults.innerHTML = 'All inputs are valid.';
  } else {
    validationResults.innerHTML = validationMsg;
  }
});
