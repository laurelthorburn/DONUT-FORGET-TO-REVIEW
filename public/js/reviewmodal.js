
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
     console.log("This is a test. Do we make it here from the modal?");
   
     const post_title = document.querySelector('#post-name').value;
     const post_content = document.querySelector('#post-desc').value;
     const post_rating = slider.value;
     console.log("I am the rating of the post... maybe??: ",
     "post-rating:",
     post_rating, 
     "=======",
     "output",
     output, 
     "slider.value",
     slider.value);

     if (post_title && post_content) {
       const response = await fetch(`/api/posts`, {
         method: 'POST',
         body: JSON.stringify({ post_title, post_content, post_rating }),
         headers: {
           'Content-Type': 'application/json',
         },
       });
   
       if (response.ok) {
         document.location.replace('/dashboard');
        console.log("HI");
       } else {
         alert('Failed to create post');
       }
     }
   };

   
   

document
.querySelector('#upload-btn')
.addEventListener('click', newReviewButton);
