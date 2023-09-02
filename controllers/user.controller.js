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

export const updateUser = async (req, res) => {
    try {
        const userRut = req.params.rut
        const updateData = req.body
        
        const updateUser = await User.findOneAndUpdate({ rut: userRut }, updateData, { new: true } )
        if (!updateUser) {
           return res.status(404).json({ message: 'Usuario no encontrado'})
        }
        
        res.status(202).json({message: `Usuario ${updateUser.nombre} ${updateUser.apellido} ha sido actualizado con éxito`})
    } catch (error) {
        res.status(500).json({message: 'No pudimos actualizar el usuario'})
    }
}