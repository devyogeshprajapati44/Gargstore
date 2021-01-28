const exp=require('express');
const rout=require('../router/users-router');
const app=exp();
const bp = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || '4000';
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));
app.use("/",rout);
app.listen(port,()=>{
    console.log("On port 4000");
});  

