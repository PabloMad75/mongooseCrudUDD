import {User} from '../models/User.model.js'

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar los usuarios'})
    }
}