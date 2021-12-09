//cloudinary environment variable
require("dotenv").config();
//newest version
const cloudinary = require("cloudinary").v2;
//picks up env ans id now configured
console.log(cloudinary.config().cloud_name);

//Node SDK Uploader function returns promise
cloudinary.uploader
    .upload({ public_id }, { /// or imageURL ?
        resource_type: "image",
    })
    .then((result) => {
        console.log("success", JSON.stringify(result, null, 2));
    })
    .catch((error) => {
        console.log("error", JSON.stringify(error, null, 2));
    });
