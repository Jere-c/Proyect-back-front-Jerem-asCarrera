const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');


class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    }
},
    {
        sequelize,
        modelName: 'Posts'
    });


// Post.sync()
//     .then(() => {
//         console.log('La tabla de Publicaciones ha sido creada');
//     })
//     .catch((error) => {
//         console.error('Error al crear la tabla de Publicaciones: ', error);
//     });

module.exports = Post;