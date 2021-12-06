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
      username: req.session.username,
      user_id: req.session.user_id,
      loggedIn: req.session.loggedIn,
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
      username: req.session.username,
      user_id: req.session.user_id,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// ------------------------------------------------------------
//Get Profile page from User ( get all the user post)

router.get("/profile", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  try {
    
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, 
      {
      attributes: { exclude: ['password'] },
      include: 
      [{ model: Post }],
    });

    const user = userData.get({ plain: true });

      // Pass serialized data and session flag into template
    res.render("profile", {
      ...user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------------------------------------------------------
//Get signUp page -- only allow signed out user's to sign up

router.get("/signUp", async (req, res) => {
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
    res.render("signUp", {
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
//Get signUp page -- only allow signed out user's to sign up

router.get("/favorites", async (req, res) => {
  if (!req.session.loggedIn) {
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
    res.render("favorites", {
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
