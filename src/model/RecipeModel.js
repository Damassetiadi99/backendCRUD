const pool = require('../config/db')
const getAll = async()=>{
    const queryGetAll = `SELECT * FROM recipe `
    return pool.query(queryGetAll)
}
const postData = async (body)=>{
    const queryPostData = `INSERT INTO recipe (title,ingredients,category,photo) VALUES ('${body.title}','${body.ingredients}','${body.category}','${body.photo}')`
    return pool.query(queryPostData)
}

const editRecipe = async (id,body)=> {
    const queryEditRecipe = `UPDATE recipe SET title = $1 ,ingredients = $2 , category =$3 ,photo = $4 WHERE id=$5`
    const tampungSementara = [body.title,body.ingredients,body.category,body.photo,id]
return pool.query(queryEditRecipe,tampungSementara)
}

const deleteRecipe = async (id,parameter)=>{
    const queryDeleteRecipe = `DELETE FROM recipe WHERE id = ${id}`
    return pool.query(queryDeleteRecipe)

}
const getRecipeByid =async(id)=>{
    const queryGetRecipeById = `SELECT * FROM recipe WHERE id =$1`
    const valueId = [id]
    return pool.query(queryGetRecipeById,valueId)
} 

module.exports = {getAll,postData,editRecipe,deleteRecipe,getRecipeByid}
