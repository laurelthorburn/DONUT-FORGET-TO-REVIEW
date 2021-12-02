const User = require('./User');
const Post = require('./Post');

Post.belongsTo(User, {
    foreingKey:'user_id'
});

User.hasMany(Post, {
    foreignKey:'user_id',
    onDelete:'CASCADE'
});
