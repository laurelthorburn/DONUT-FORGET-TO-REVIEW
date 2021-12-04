const router = require("express").Router();
const { User, Post } = require("./../models");

// -------------------------------------------------------------

// GET all posts
router.get("/", async (req, res) => {
  console.log("Did you make it to me?? 1");
  try {
    console.log("Did you make it to me?? 2");

    // Get all Posts and JOIN with User data
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    console.log("Did you make it to me?? 3");

      // Serialize data so the template can read it -- else you get a mass of information that is overwhelming and difficult to work with
    const posts = dbPostData.map((post) => post.get({ plain: true }));

      // Pass serialized data and session flag into template
    res.render("all", {
      posts,
      username: req.session.username,
      user_id: req.session.user_id,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------------------------------------------------------
// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
