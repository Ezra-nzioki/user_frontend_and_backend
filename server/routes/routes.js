import express from 'express'

const router = express.Router()

// Import controllers
import { createUser, getUsers,getUser,updateUser,deleteUser } from '../controllers/userController.js'

// Define routes
router.post('/users', createUser)
router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router