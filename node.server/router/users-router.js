const exp=require('express');
const userController=require('../controller/users-controller')
const rout=exp.Router();
rout.post('/user-registraion',userController.userRegstration);
rout.post('/user-login',userController.userlogin);
rout.get('/get-user',userController.findUser);
rout.post('/update-user',userController.updateUser);
rout.post('/delete_user',userController.deleteUser);
module.exports=rout;