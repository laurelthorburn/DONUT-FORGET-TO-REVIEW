const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Like extends Model {}

Like.init(
    {
        id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: DataTypes.INTEGER,
        },
        post_id: {
          type: DataTypes.INTEGER,
          references: {
           model: "Post",
           key: "id",
          },
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
             model: "User",
             key: "id",
          },
        },
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'like',
          }
        );

module.exports = Like;