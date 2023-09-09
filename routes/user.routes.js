import express from 'express'
const router = express.Router()

import { deleteUserByRut, getAllUsers, getUserByRut, login, signUp, updateUser} from '../controllers/user.controller.js'


router.get('/users',  getAllUsers)

router.get('/users/:rut',  getUserByRut)

router.post('/users', signUp)

router.post('/login', login)

router.put('/users/:rut',  updateUser)

router.delete('/users/:rut',  deleteUserByRut)

export default router

