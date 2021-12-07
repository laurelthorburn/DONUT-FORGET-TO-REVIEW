const cloudinary = require("./cloudinary");

const uploadImage = async imageURL => {
    const { public_id } = await cloudinary.uploader.upload_large(imageURL, {
        upload_preset: "dev_setup"
    });
    return public_id;
}
module.exports = uploadImage;