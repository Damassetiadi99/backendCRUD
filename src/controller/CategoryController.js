const modelController = require('../model/CategoryModel')
const getCategory =async(req,res)=>{
    const result = await modelController.categoryModel()
try {
        
        res.status(200).json({
            message:'data berhasil didapat',
            data : result.rows
        })
    } catch (error) {
        res.status(500).json({
            message : 'data tidak didapatkan',
            error:error.message
        })
    }
}



module.exports = {getCategory}