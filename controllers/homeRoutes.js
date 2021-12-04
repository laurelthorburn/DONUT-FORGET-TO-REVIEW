const router = require("express").Router();
const { User, Post, Comment } = require("./../models");

// -------------------------------------------------------------

// GET initial page (this is our login page and sample site page)

router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  try {

    // Get all Posts and JOIN with User data
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

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
// -------------------------------------------------------------

// GET all posts
router.get("/dashboard", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  try {

    // Get all Posts and JOIN with User data
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

      // Serialize data so the template can read it -- else you get a mass of information that is overwhelming and difficult to work with
    const posts = dbPostData.map((post) => post.get({ plain: true }));

      // Pass serialized data and session flag into template
    res.render("dashboard", {
      posts,
      username: req.session.username,
      user_id: req.session.user_id,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// -------------------------------------------------------------

// GET aboutUs page

router.get("/aboutUs", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  try {

      // Pass serialized data and session flag into template
    res.render("aboutUs", {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// -------------------------------------------------------------

// GET newPost page 

router.get("/newPost", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  try {

      // Pass serialized data and session flag into template
    res.render("newPost", {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------------------------------------------------------
// Login route
router.get("/login", (req, res) => {

  console.log(req.session)
  
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// GET a single post
router.get("/:id", async (req, res) => {

  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  try {

    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["comment_content", "createdAt"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        { model: User, attributes: ["username"] },
      ],
    });

    const post = dbPostData.get({ plain: true });

    req.session.post_id = post.id;

    console.log("I AM THE POST ID... I HOPE",
    req.session.post_id) // works
    
    res.render("post", {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
