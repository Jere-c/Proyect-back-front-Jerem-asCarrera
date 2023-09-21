const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Post = require('./post');


class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
    {
        sequelize,
        modelName: 'User'
    });

    User.hasMany(Post, {
        foreignKey: 'userId',
        sourceKey: 'id',
    })

    Post.belongsTo(User, {
        foreignKey: 'userId',
        sourceKey:'id'
    })
    // User.sync()
    // .then(() => {
    //     console.log('La tabla de usuarios ha sido creada');
    // })
    // .catch((error) => {
    //     console.error('Error al crear la tabla de usuarios: ', error);
    // });

module.exports = User;