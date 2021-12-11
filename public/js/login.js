
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      console.log("Do i make it inside the front end fetch?")
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) { //response.ok isn't currently working  -Laurel 12/4/21 11;28AM
        console.log(response)
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in. Bummer!');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up. ');
      }
    }
  };
  function checkForm()
  {
      var name = document.getElementById('username-login').value       
      var cansubmit = (name.length > 0);
      
      var password = document.getElementById('password-login').value
      var cansubmit = (password.length > 0);
      
      document.getElementById("submit-btn").disabled = !cansubmit;

  };

  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);