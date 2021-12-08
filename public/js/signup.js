
  
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
      var name = document.getElementById('username-signup').value       
      var cansubmit = (name.length > 0);
      
      var password = document.getElementById('password-signup').value
      var cansubmit = (password.length > 0);
      
      document.getElementById("submit-btn").disabled = !cansubmit;

  };
  
 

  
 document
  .querySelector('.signup-form')
   .addEventListener('submit', signupFormHandler);