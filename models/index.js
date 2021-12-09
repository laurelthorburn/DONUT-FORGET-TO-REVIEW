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

Post.hasMany(Like, {
     foreignKey: 'post_id',
});


Like.belongsTo(Post, {
     foreignKey: 'post_id', 
});


// Like.belongsTo(User,{});

User.hasMany(Like, { 
    foreignKey: 'user_id', 
});

Like.belongsTo(User, { 
    foreignKey: 'user_id', 
 });

module.exports = { User, Post, Comment, Like };