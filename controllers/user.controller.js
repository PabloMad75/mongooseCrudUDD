import {User} from '../models/User.model.js'

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar los usuarios'})
    }
}

export const createUser = async (req, res) => {
    try {
        const newUser = req.body
        const user = new User(newUser)
        const saveUser = await user.save();
        res.status(201).json({message: `El usuario ${saveUser.nombre} ${saveUser.apellido} ha sido creado con éxito`})
    }catch(error){
        res.status(500).json({message: 'No pudimos crear el usuario'})
    }
}

