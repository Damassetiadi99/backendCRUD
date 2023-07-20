const modelRecipe = require('../model/RecipeModel')
const getController = async (req,res)=>{
    const result = await modelRecipe.getAll()
    const data = result.rows
    console.log(result.rows)
    try { 
        res.status(200).json({
            message : 'data berhasil didapat',
            data : result.rows
        })
    } catch (error) {
        res.status(400).json({
            message : 'data tidak didapat',
            error : error.message
        })
    }
}
const postController =async (req,res)=>{
    const data = req.body
    const request = await modelRecipe.postData(data)
    
    try {

        res.status(200).json ({
            message : 'data berhasil dimasukan',
            data : data
        })
        
    } catch (error) {
        res.status(500).json({
            message : 'data gagal diinput',
            error : error.message
        })
    }
}
const editController = async (req,res)=>{
    const {id} =req.params
     const data = req.body 
      await modelRecipe.editRecipe(id,data)

    try { 
        res.status(200).json ({
            message : 'data berhasil di edit',
            data : data
        })       
    } catch (error) {
        res.status(500).json ({
            message : 'data gagal diedit ',
            error : error.message
        })
    }
}

const deleteController = async(req,res)=>{
const {id} = req.params
await modelRecipe.deleteRecipe(id)
try {
    res.status(200).json({
        message: 'data berhasil dihapus'
    })
} catch(error) {
    res.status(400).json({
        message : 'data gagal dihapus',
        error : error.message,
        error:error,
    })
}
}
const getRecipeById = async(req,res)=>{
    const id = req.params.id
    const data = await modelRecipe.getRecipeByid(id)
    const result = data.rows
try {
    res.status(200).json({
        message : 'data berhasil ditampilkan',
        data : result
    })
} catch (error) {
    res.status(400).json({
        message : 'data tidak didapatkan',
        error: error.message
    })
}

}


module.exports = {getController,postController,editController,deleteController,getRecipeById}