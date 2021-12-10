var imgPreview = document.getElementById('imgPreview');
var imgUpload = document.getElementById('imgUpload');

//Image preview
imgUpload.onchange = event => {
    const [file] = imgUpload.files
    if (file) {
        imgPreview.src = URL.createObjectURL(file)
        console.log(imgPreview);
    }
}


/// 
imgUpload.addEventListener('change', async (event) => {

    var file = event.target.files[0];
    let image;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        image = reader.result;
        postImage(image)
    }
});


const postImage = async (image) => {
    console.log(typeof image);
    await fetch("/api/images/upload", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ file: image })

    })
}
//     document.querySelector("#selectFile").addEventListener('submit', function (event) {
//         event.preventDefault()
//         ///grab image data and send using fetch request front end to back end 
//     })
// })

//move to public eventually !
