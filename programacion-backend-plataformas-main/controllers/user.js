const User = require('../models/user');
const Post = require('../models/post')

// Peticiones 

exports.getUsers = async (req, res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json({
            ok:true,
            users
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            message:'Error al obtener los datos: ',error,
        })
    }
}

exports.getUserById = async (req, res)=>{
    try {
        const { id } = req.params
        const user = await User.findByPk(id);
        res.status(200).json({
            ok:true,
            user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            message:'Error al obtener los datos: ',error,
        })
    }
}

exports.createUser = async(req, res)=>{
    try {
        console.log(req.body);
        const {username, password, email} = req.body;
        const newUser={
            username,
            password,
            email
        }
        const user = await User.create(newUser);

        res.status(201).json({
            ok:true,
            user
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:'Server Error'
        })  
    }
}

exports.updateUser = async(req, res)=>{
    try {
        const {id} = req.params
        const user = await User.findByPk(id)
        user.set(req.body)
        await user.save()
        res.status(202).json({
            ok:true,
            user
        })
    } catch (error) {
        res.status(500).json({
            message:'Server Error'
        })  
    }
}

exports.deleteUser =async(req, res)=>{
    try {
        const { id } = req.params
        await User.destroy({
            where:{id}
        })
        res.status(204).json({
            message:'Se borro con exito'
        })  
    } catch (error) {
        res.status(500).json({
            message:'Server Error'
        })  
    }
}

exports.getUserPosts = async(req, res)=>{
    try {
        const {id}=req.params
        const user = await User.findAll({
            where:{id},
            include: {
                model: Post
            }
        })
        res.status(201).json({
            ok:true,
            user
        })
    } catch (error) {
        res.status(500).json({
            message:'Server Error'
        })  
    }
}
//join 

