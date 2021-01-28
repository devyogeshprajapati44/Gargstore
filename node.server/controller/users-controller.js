const con = require('../dbconction/db/conncetion');
exports.userRegstration = (req, res) => { 
   var sql = 'INSERT INTO users SET ?';
   con.query(sql, req.body, (err, result) => {
      if (err) {
         res.send({
            success: false,
            message: 'data not inserted !'
         });
      } else {
         res.send({
            success: true,
            message: 'data inserted!'
         });
      }
   });
}
exports.userlogin = (req, res) => {
   con.query('SELECT * FROM users WHERE email = ? AND password = ?', [req.body.username, req.body.password], (err, result) => {
      if(err){
      res.json({
            success: false,
            message: ' Somting is wrong !'
      })
     }else{ 
        if(result.length==1){
         res.json({
            success: true,
            message: 'User login successfully !',
            data:result
      })
        } else {
         res.json({
            success: false,
            message: 'Username or password is wrong !',
      })
        }
     }
   });
}
exports.findUser=(req,res)=>{
   con.query('SELECT * FROM users', (err,data)=>{
if (err) {
   res.send({
      success: false,
      message: 'data not found !'
   });
} else {
   res.send({
      success: true,
      message: 'data found!',
      data:data
   });
}
   });
}
exports.updateUser=(req,res)=>{
   console.log(req.body)
  var  ids=req.body.id;
//   String(ids)
  delete req.body.id;
  var sql="UPDATE users set ?  WHERE id = ? "
   con.query(sql, [req.body,ids],(err,data)=>{
      if (err) {
         // console.log(err)
         res.send({
            success: false,
            message: 'not updated !',
            err:err
         });
      } else {
         res.send({
            success: true,
            message: 'updated !',
         });
      }
   });
}
exports.deleteUser=(req,res)=>{
con.query("DELETE from users WHERE id=  '"+req.body.id+"'",(err,result)=>{
     if(err){
        res.send({
        success:false,
        message:"not deleted !"
        });
     } else {
      res.send({
         success:true,
         message:"deleted !"
         });
     }
});
}