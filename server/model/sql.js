const mysql=require('mysql')

const db=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'web-server'
})

module.exports=db