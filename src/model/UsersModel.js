const pool = require ('../config/db')
const getAll = async()=>{
    const queryGetAll = `SELECT * FROM users`
    return pool.query(queryGetAll)
}

const postData = async (body)=>{
    const queryPostData = `INSERT INTO users (nama,email,passwords) VALUES ('${body.nama}','${body.email}','${body.passwords}')`
// const tampungSementara =[body.nama,body.email,body,passwords]
return pool.query(queryPostData)
}

const editUsers = async(id,body)=>{
    const queryEditUsers= `UPDATE users SET nama = $1,email = $2,passwords=$3 WHERE id=$4`
    const tampungSementara = [body.nama,body.email,body.passwords,id]
    return pool.query(queryEditUsers,tampungSementara)

    
} 
const deleteUsers = async(id,parameter)=>{
    const queryDeleteUsers = `DELETE FROM users WHERE id = ${id}`
    return pool.query(queryDeleteUsers)

}

const getById = async (id)=>{
   const queryGetByid =`SELECT * FROM users WHERE id= $1`
   const valueId = [id]
return pool.query(queryGetByid,valueId)
}


module.exports = {getAll,postData,editUsers,deleteUsers,getById}