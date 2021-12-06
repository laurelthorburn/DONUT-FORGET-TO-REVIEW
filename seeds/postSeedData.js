const { Post } = require('../models')

const postdata = [
    {
        "post_title": "My Random Thoughts",
        "post_content": "Oh the things I could say.  Did you know that donuts aren't just good for your health they're also good for your spirit!  I know, right... let's put down the laptop and go get some donuts instead!",
        "user_id": 1
    },
    {
        "post_title": "Oh glorious donuts",
        "post_content": "Just the other day I took a bite into a chocolate donut, and oh me oh my what a little slice of heaven it was.  Now, why don't we eat more donuts on the daily?!  That is the real question, I do declare!",
        "user_id": 2
    },
    {
        "post_title": "Favorite donut",
        "post_content": "Have you ever taken a bite of a donut and you just knew, this is your most favorite donut.  My person favorite is the ODB from Voodoo donuts.  I love the combination of peanut butter and oreo.  Oh man, I better stop typing and start driving to Voodoo to get one.  What's your favorite donut?",
        "user_id": 3
    }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;