var imgPreview = document.getElementById('imgPreview');
var imgUpload = document.getElementById('imgUpload');

//Image preview
imgUpload.onchange = evt => {
    const [file] = imgUpload.files
    if (file) {
        imgPreview.src = URL.createObjectURL(file)
        console.log(imgPreview);
    }
}


/// 
imgUpload.addEventListener('change', function (event) {
    ///looking for files: in event
    // console.log(event);
    var file = event.target.files[0];
    console.log(file);
})

//     document.querySelector("#upload").addEventListener('submit', function (event) {
//         event.preventDefault()
//         ///grab image data and send using fetch request front end to back end 
//     })
// })

//move to public eventually !
