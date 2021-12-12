
// slider

var slider = document.getElementById("myRange");
var output = document.getElementById("rating-num");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

const newReviewButton = async (event) => {
    //  event.preventDefault();
   
     const post_title = document.querySelector('#post-name').value;
     const post_content = document.querySelector('#post-desc').value;
     const post_rating = slider.value;
     const post_img = cloudURL;


     if (post_title && post_content) { //do we want to force the user to upload an img?
       const response = await fetch(`/api/posts`, {
         method: 'POST',
         body: JSON.stringify({ post_title, post_content, post_rating, post_img }),
         headers: {
           'Content-Type': 'application/json',
         },
       });
   
       if (response.ok) {
         document.location.replace('/profile');
       } else {
         alert('Failed to create post');
       }
     }
   };

const sendUpdateButton = async (event) => {
  if (event.target.hasAttribute('data-put')) {

const post_content = document.querySelector('#message-text').value;
const post_title = document.querySelector('#recipient-name').value;

    const response = await fetch(`/api/posts/edit/${postID}`, {
      method: 'PUT',
      body: JSON.stringify({post_title, post_content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to send final post update');
    }
  }
};


const handleButtonClick = async (event) => {
  if (event.target.getAttribute('data-button-type') == 'update') {

      // event.preventDefault();
      if (event.target.hasAttribute('data-update')) {
        const id = event.target.getAttribute('data-update');
      
        postID = id;

      const response = await fetch(`/api/posts/${id}`);
    
      const postResponse = await response.json(); //converts to readable data
    
      console.log("YOU NEED THIS:",
      postResponse)
    
    document.querySelector('#message-text').value = postResponse.post_content;
    document.querySelector('#recipient-name').value = postResponse.post_title;
    
      return postResponse;
      };

  } else if (event.target.getAttribute('data-button-type') == 'delete') {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  }
}


document
.querySelector('#upload-btn')
.addEventListener('click', newReviewButton);
 
document.querySelector('.post-list').addEventListener('click', handleButtonClick);
 
 document
   .querySelector('#update-button')
   .addEventListener('click', sendUpdateButton);