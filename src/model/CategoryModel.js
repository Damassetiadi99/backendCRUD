const pool = require('../config/db')
const categoryModel = async ()=>{
 const queryCategoryModel = `SELECT * FROM Category`

 return pool.query(queryCategoryModel)
}
    



module.exports = {categoryModel}