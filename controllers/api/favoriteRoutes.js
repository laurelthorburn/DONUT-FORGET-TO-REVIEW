const router = require('express').Router();
const { Post, User, Favorite, Like } = require('../../models');

//display all the user's favorite posts

router.get('/', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/");
        return;
      }

      try {

        // Get all Favorites and then pull the post id's with user
        const dbFavoriteData = await Favorite.findAll({
            distinct: true,
          include: [
            {
              model: Post,
            },
            // {
            //   model: User,
            //   attributes: ['username'],
            // },
          ],
        });

        console.log("dbFavData: ",
        dbFavoriteData)
    
          // Serialize data so the template can read it -- else you get a mass of information that is overwhelming and difficult to work with
        const favorites = dbFavoriteData.map((favorite) => favorite.get({ plain: true }));

        
        console.log("favorites: ",
        favorites)
    
          // Pass serialized data and session flag into template
        res.send("favorites", {
          favorites,
        //   username: req.session.username,
        //   user_id: req.session.user_id,
        //   loggedIn: req.session.loggedIn,
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

    //add post to favorites
    router.post('/newFavorite', async (req, res) => {
        
        try {
    console.log("hello");

          const newFavorite = await Favorite.create({
            user_id: req.session.user_id, //works
            post_id: req.body.post_id, //nah
          });
      
      
          // console.log("============================",
          // newFavorite,
          // "*~*~*~*~*~*~*~*~*~~*~*~*~*");
      
          res.status(200).json(newFavorite);
        } catch (err) {
            console.log("Are we here?",
            err)

          res.status(400).json(err);
        }
      });

    // router.delete('/:id', async (req, res) => {
    //     try {
    //       const postData = await Post.destroy({
    //         where: {
    //           id: req.params.id,
    //           user_id: req.session.user_id,
    //         },
    //       });
      
    //       if (!postData) {
    //         res.status(404).json({ message: 'No post found with this id!' });
    //         return;
    //       }
      
    //       res.status(200).json(postData);
    //     } catch (err) {
    //       res.status(500).json(err);
    //     }
    //   });
    

module.exports = router;