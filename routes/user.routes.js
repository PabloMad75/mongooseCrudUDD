import express from 'express'
const router = express.Router()

import { deleteUserByRut, getAllUsers, signUp, updateUser} from '../controllers/user.controller.js'

router.get('/users', getAllUsers)

router.post('/users', signUp)

router.put('/users/:rut', updateUser)

router.delete('/users/:rut', deleteUserByRut)

export default router

