const {Router} = require('express')
const { getUser, addUser, updateUser, deleteUser, userSignup, userLogin, userList } = require('../controllers/user.controller')

const userRouter = Router()

userRouter.get('/', getUser)
userRouter.post('/signup', userSignup)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)
userRouter.post('/login', userLogin)
userRouter.get('/userlist', userList)


module.exports = {userRouter}