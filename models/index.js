const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Like = require('./Like');

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});


// Post.hasMany(Likes,{});
// Like.belongsTo(User,{});
//


module.exports = { User, Post, Comment, Like };