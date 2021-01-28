const mysql=require('mysql');
const  mysql=createConnection ({
        host: "localhost",
        user: "root",
        password: ""
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });