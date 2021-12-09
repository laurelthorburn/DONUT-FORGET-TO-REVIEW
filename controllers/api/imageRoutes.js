const router = require('express').Router();
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_URL,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
// const { Post, Comment } = require('../../models');


router.post('/', async (req, res) => {
    // if (!req.session.loggedIn) {
    //     res.redirect("/login");
    //     return;
    // }
    try {
        //picks up env ans id now configured
        console.log(cloudinary.config().cloud_name);
        cloudinary.uploader.upload(req.body.image,
            function (error, result) {
                console.log(result, error)
                if (error) {

                    res.json(error)
                } else {
                    res.json(result)
                }
            });
        //Node SDK Uploader function returns promise
        // cloudinary.uploader
        //     .upload("/Users/florenciaceballos/Bootcamp/Projects/Project2/DONUT-FORGET-TO-REVIEW/image/Pusheen.jpg", {
        //         resource_type: "image",
        //     })
        //     .then((result) => {
        //         console.log("success", JSON.stringify(result, null, 2));
        //         res.json(result)
        //     })
        //     .catch((error) => {
        //         console.log("error", JSON.stringify(error, null, 2));
        //         res.json(error)
        //     });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;



//// I NEED to turn my image into "data"