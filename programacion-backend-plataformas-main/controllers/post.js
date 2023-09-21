const Post = require('../models/post');



exports.getPosts = async (req, res)=>{
    try {
        const posts = await Post.findAll();
        res.status(200).json({
            ok:true,
            posts
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            message:'Error al obtener los datos: ',error,
        })
    }
}


exports.getPostById = async (req, res)=>{
    try {
        const { id } = req.params
        const post = await Post.findByPk(id);
        res.status(200).json({
            ok:true,
            post
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            message:'Error al obtener los datos: ',error,
        })
    }
}

exports.createPost = async (req, res)=>{
    try {
        console.log(req.body);
        const {title, description, date, image, userId} = req.body
        const newPost = {
            title ,
            description,
            date,
            image,
            userId
        }
        const post = await Post.create(newPost)
        res.status(201).json({
            ok:true,
            post
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            message:'Error al obtener los datos: ',error,
        })
    }
}

exports.updatePost = async (req, res)=>{
    try {
        const {id} = req.params
        const post = await Post.findByPk(id)
        post.set(req.body)
        await post.save()
        res.status(202).json({
            ok:true,
            post
        })
    } catch (error) {
        res.status(500).json({
            ok:false,
            message:'Error al obtener los datos: ',error,
        })
    }
}

exports.deletePost = async (req, res)=>{
    try {
        const {id} = req.params
        await Post.destroy({
            where:{id}
        })
        res.status(204).json({
            message:'Se borro con exito'
        })
    } catch (error) {
        res.status(500).json({
            ok:false,
            message:'Error al obtener los datos: ',error,
        })
    }
}