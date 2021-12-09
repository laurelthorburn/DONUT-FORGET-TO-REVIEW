
const router = require('express').Router();
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_URL,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
// const { Post, Comment } = require('../../models');
router.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

/// POSSIBLY change post to PUT and / to /:id
router.post('/upload', async (req, res) => {

    // if (!req.session.loggedIn) {
    //     res.redirect("/login");
    //     return;
    // }
    console.log(req.body);
    const { file } = req.body
    var uploadStr = 'data:image/jpeg;base64,' + file;

    try {
        const response = await cloudinary.uploader
            .upload_large(uploadStr, {

                upload_preset: "dev_setup"


            })
        console.log(response)
        console.log(typeof file);
        res.json({ mess: "wrong" });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = router;
