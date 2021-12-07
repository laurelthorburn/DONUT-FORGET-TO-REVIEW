
  
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
//jquery
  // $(function (){
  //   $("#username-signup, #password-signup").bind("change keyup",
  //   function(){
  //      if($("#username-signup").val() != "" && $("#password-signup").val() != "")
  //         $(this).closest("form").find(":submit").removeAttr("disabled");
  //      else
  //         $(this).closest("form").find(":submit").attr("disabled","disabled"); 
  //   });
  // });
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);