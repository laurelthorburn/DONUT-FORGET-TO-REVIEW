// slider

var slider = document.getElementById("myRange");
var output = document.getElementById("rating-num");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
}

const newReviewButton = async (event) => {
  //  event.preventDefault();
  console.log("This is a test. Do we make it here from the modal?");

  const post_title = document.querySelector('#post-name').value;
  const post_content = document.querySelector('#post-desc').value;
  const post_rating = slider.value;
  const post_img = cloudURL;

  console.log("I am the img link of the post... maybe??: ",
    "post-img:",
    post_img, //works
    "=======");

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

//  const delButtonHandler = async (event) => {
//    console.log("HEY DED WE MAKE IT TO DELLLLLETE")
//    console.log(event.target)
//    if (event.target.hasAttribute('data-id')) {
//      const id = event.target.getAttribute('data-id');
//      console.log("delete id:",
//      id)

//      const response = await fetch(`/api/posts/${id}`, {
//        method: 'DELETE',
//      });

//      if (response.ok) {
//        document.location.replace('/profile');
//      } else {
//        alert('Failed to delete post');
//      }
//    }
//  };



const updateButtonHandler = async (event) => {
  // event.preventDefault();
  if (event.target.hasAttribute('data-update')) {
    const id = event.target.getAttribute('data-update');

    postID = id;
    console.log("update ID:",
      id)
    const response = await fetch(`/api/posts/${id}`);

    const postResponse = await response.json(); //converts to readable data


    document.querySelector('#message-text').value = postResponse.post_content;
    document.querySelector('#recipient-name').value = postResponse.post_title;

    return postResponse;
  };
};

const sendUpdateButton = async (event) => {
  if (event.target.hasAttribute('data-put')) {

    const post_content = document.querySelector('#message-text').value;
    const post_title = document.querySelector('#recipient-name').value;

    const response = await fetch(`/api/posts/edit/${postID}`, {
      method: 'PUT',
      body: JSON.stringify({ post_title, post_content }),
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


document
  .querySelector('#upload-btn')
  .addEventListener('click', newReviewButton);

//  document
//    .querySelector('.new-post-form')
//    .addEventListener('submit', newFormHandler);

const handleButtonClick = async (event) => {
  if (event.target.getAttribute('data-button-type') == 'update') {
    // do updates here
  } else if (event.target.getAttribute('data-button-type') == 'delete') {
    console.log("HEY DED WE MAKE IT TO DELLLLLETE")
    console.log(event.target)
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log("delete id:",
        id)

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

document.querySelector('.post-list').addEventListener('click', handleButtonClick);

//  document
//    .querySelector('.post-list')
//    .addEventListener('click', delButtonHandler);

//  document
//    .querySelector('.post-list')
//    .addEventListener('click', updateButtonHandler);

document
  .querySelector('#update-button')
  .addEventListener('click', sendUpdateButton);