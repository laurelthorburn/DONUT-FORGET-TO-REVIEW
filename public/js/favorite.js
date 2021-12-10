//we need to capture the post_id in order to render that posts's body and add it to our favorite's table


const newFavorite = async (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-favorite');
    console.log(id);
      
      const response = await fetch(`/api/favorites/newFavorite`, { 
        method: 'POST',
        body: JSON.stringify({ id }), //i don't think we nee to stringify this?
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response) {
        document.location.reload(); // '/favorites'??
      } else {
        alert('Failed to add to favorite');
      }
    };
  
  document
    .querySelector('.fav-button')
    .addEventListener('click', newFavorite); //eventually i need to create a toggle, goal for now is just to add to favorites
  
  