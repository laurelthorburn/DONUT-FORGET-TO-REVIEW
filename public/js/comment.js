const newFormHandler = async (event) => {
  event.preventDefault();

  const comment_content = document.querySelector('#comment-content').value;


  // capture :id as a variable, send in the variable
  if (comment_content) {
    
    const response = await fetch(`/api/posts/comment`, { // i need to pass the post id to this?
      method: 'POST',
      body: JSON.stringify({ comment_content }), 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload(); //CAN I JUST REFRESH THE PAGE?
    } else {
      alert('Failed to create comment');
    }
  }
};


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

