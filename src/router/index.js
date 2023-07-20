const express = require('express')
const categoryController = require('../controller/CategoryController')
const router = express.Router()
// const {getRecipe}=categoryController
const getData = require('../controller/RecipeController')
//terhubung ke controller
const users = require('../controller/usersController')
const category = require('../controller/CategoryController')

//terhubung dengan Recipe
router.get('/getData',getData.getController)
router.post('/postData',getData.postController)
router.put('/editData/:id',getData.editController)
router.delete('/deleteData/:id',getData.deleteController)
router.get('/getRecipeById/:id',getData.getRecipeById)

//hubungan tanpa ststus dengan users controller
router.get('/getUsers',users.getController)
router.post('/postUsers',users.postController)
router.put('/editUsers/:id',users.editController)
router.delete('/deleteUsers/:id',users.deleteUsers)
router.get('/getUserById/:id',users.getUsersById)

//hubungan dengan category controller
router.get('/getCategory',category.getCategory)


//terhubung dengan user database
// router.get('/getRecipe',getRecipe)

module.exports = router