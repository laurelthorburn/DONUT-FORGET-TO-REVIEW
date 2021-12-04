const router = require("express").Router();
const { User, Post, } = require("./../models");

//Get Profile page from User ( get all the user post)


router.get("/", async (req, res) => {
    try {
      const dbPostData = req.user.id; 
      const post = await User.findById(user_Id);
      res.send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong, check logs");
    }
  });