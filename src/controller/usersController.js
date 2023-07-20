const modelUsers = require('../model/UsersModel')
const getController = async (req,res)=>{
    const result = await modelUsers.getAll()
    const data = result.rows
try {
    
    res.status(200).json({
        message : 'data berhasil di dapatkan ',
        data : data
    })
} catch (error) {
    res.status(400).json({
        message : 'data gagal ditemukan ',
        error: error.message
    })
    
}}

const postController = async(req,res)=>{
const data = req.body 
const request = await modelUsers.postData(data)

try {
    res.status(200).json({
        message : 'data berhasil dimasukan ',
        data : data
    })
} catch (error) {
    res.status(400).json({
        message : 'data gagal dimasukan ',
        error : error.message
    })
}


}

const editController = async (req,res)=>{
    const {id} = req.params
    const data = req.body
    await modelUsers.editUsers(id,data)
//    console.log(result)

//    console.log(data)
    try {
        
        res.status(200).json({
            message : 'data berhasil di edit',
            data: data
        })  
      
      
    } catch (error) {
        res.status(500).json({
            message : 'data gagal diedit',
            error : error.message
            
        })
        

    }
}
const deleteUsers =async(req,res)=>{
const {id} =req.params
await modelUsers.deleteUsers(id)
try {
    res.status(200).json({
        message:'data berhasil dihapus',

    })
} catch (error) {
    res.status(400).json({
        message : 'data gagal dihapus',
        error : error.message
    })
}
}
const getUsersById = async(req,res)=>{
    const id = req.params.id
    const data =await modelUsers.getById(id)
    const result = data.rows
    try {
        res.status(200).json({
            message : 'data berhasil dipanggil ',
            data :result
        })
    } catch (error) {
        res.status(400).json({
            message : 'data tidak dapat tampil',
            error : error.message
        })
    }

}

module.exports = {getController,postController,editController,deleteUsers,getUsersById}