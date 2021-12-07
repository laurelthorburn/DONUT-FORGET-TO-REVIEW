window.addEventListener("load", function () {
    document.querySelector('input[type=file]')
    document.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
            console.log(e.target.files[0]);
            var img = document.querySelector("img");
            img.onload = () => {
                URL.revokeObjectURL(img.src);
            };
            img.src = URL.createObjectURL(e.target.files[0]);
        }
    })
})
