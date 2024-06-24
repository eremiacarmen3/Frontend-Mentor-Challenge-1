document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');
  const userEmail = document.getElementById('user-email');

  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    errorMessage.textContent = 'Email is required';
    errorMessage.style.display = 'block';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    errorMessage.textContent = 'Please enter a valid email address';
    errorMessage.style.display = 'block';
    return;
  }

  errorMessage.style.display = 'none';
  userEmail.textContent = emailValue;
  successMessage.style.display = 'block';
  emailInput.value = '';
});