// Here is where we set up our Dish model, for when we are ready to connect to a database in future activities. 

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    post_rating: {
      type: DataTypes.INTEGER,
    },
    post_img: {
      type: DataTypes.TEXT,
      allowNull: true, 
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },//add likes count on post
    likesCount:{
      type:DataTypes.INTEGER,
      defaultValue:0,
      validate: {
                min: 0,
            }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;