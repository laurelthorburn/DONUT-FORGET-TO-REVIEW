const { Post } = require('../models')

const postdata = [
    {
        "post_title": "My Random Thoughts",
        "post_content": "Oh the things I could say.  Did you know that donuts aren't just good for your health they're also good for your spirit!  I know, right... let's put down the laptop and go get some donuts instead!",
        "post_img": "https://cdn.pixabay.com/photo/2012/02/28/00/47/berliner-17811_960_720.jpg",
        "post_rating": 4,
        "user_id": 1
    },
    {
        "post_title": "Oh glorious donuts",
        "post_content": "Just the other day I took a bite into a chocolate donut, and oh me oh my what a little slice of heaven it was.  Now, why don't we eat more donuts on the daily?!  That is the real question, I do declare!",
        "post_img": "https://cdn.pixabay.com/photo/2020/01/14/10/55/cartoon-4764725_960_720.png",
        "post_rating": 3,
        "user_id": 2
    },
    {
        "post_title": "Favorite donut",
        "post_content": "Have you ever taken a bite of a donut and you just knew, this is your most favorite donut.  My person favorite is the ODB from Voodoo donuts.  I love the combination of peanut butter and oreo.  Oh man, I better stop typing and start driving to Voodoo to get one.  What's your favorite donut?",
        "post_img": "https://cdn.pixabay.com/photo/2017/08/10/01/27/donut-2616841_960_720.jpg",
        "post_rating": 2,
        "user_id": 3
    }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;