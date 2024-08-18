 // script.js
const registrationForm = document.getElementById('registration-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const phone = phoneInput.value.trim();

  // Validate input fields
  if (email === '' || password === '' || phone === '') {
    alert('Please fill in all fields');
    return;
  }

  // Register user using email and password
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      phone
    })
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      alert('Registration successful!');
      // Redirect to login page
      window.location.href = '/login';
    } else {
      alert('Registration failed. Please try again.');
    }
  })
  .catch((error) => {
    console.error(error);
  });
});

// Social media registration
const facebookLink = document.querySelector('.facebook-link');
const googleLink = document.querySelector('.google-link');
const twitterLink = document.querySelector('.twitter-link');

facebookLink.addEventListener('click', () => {
  // Register user using Facebook
  fetch('/register/facebook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
})
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      alert('Registration successful!');
    }
})
     
 

