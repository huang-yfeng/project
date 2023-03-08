const express = require('express');
const router = express.Router();
const connection=require('../model/sql')
const crypto=require('crypto')
const jwt=require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//登录
router.post('/login',function (req, res, next){
  let {userName,userPwd} =req.body

  const md5=crypto.createHash('md5')
  userPwd=md5.update(userPwd).digest('hex')

  const sql=`SELECT * FROM userinfo WHERE userName='${userName} and userPwd='${userPwd}'`

  connection.query(sql,(err,data)=>{
    console.log(data,'查询到的数据')
    if(err) return res.json({
      code:1,
      msg:"查询失败",
      data:{}
    })

    return res.json({
      code:200,
      msg:"成功",
      data
    })

  })

})

module.exports = router;
