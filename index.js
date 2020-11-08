const { Sequelize } = require('sequelize');
const express = require('express');
const app = express();
const mysqlite = require('sqlite3');
const {RedisInfo} = require('./models');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const {ping,flushall,get_info} = require('./functions/redisMonitor');
const {md5} = require('./functions/stringUtill');
app.get("/",(req,res)=>{
    res.send("Done");
})

app.get("/api/redis_list",(req,res)=>{
    RedisInfo.findAll()
    .then((redisInfo)=>{
        res.json(redisInfo);
    }).catch((err)=>{
        console.log(err);
    });
});
app.get("/api/redis_info",(req,res)=>{
    
    //console.log(t);
    RedisInfo.findAll({
        where: {
            md5: req.query.md5
          }
    })
    .then((redisInfo)=>{
        res.json(redisInfo);
    }).catch((err)=>{
        console.log(err);
    });
});
app.get("/api/redis_monitor",(req,res)=>{
 //  var md5U = req.query.md5;

 RedisInfo.findAll({
    where: {
        md5: "first"
      }
})
.then((redisInfo)=>{
    console.log(redisInfo);
    var rst = get_info(host=redisInfo.host,
        port=redisInfo.port,
        password=redisInfo.password)
    res.json(rst);
}).catch((err)=>{
    console.log(err);
});

});
app.get("/api/ping",(req,res)=>{
    var  host=req.query.host;
  var  port =req.query.port;
  var  password=req.query.password;

  var rst = ping(host=host,
    port=port,
    password=password);


    res.json(rst);
});
app.get("/api/redis/flushall",(req,res)=>{
    var md5G= req.query.md5;
    var db = req.query.db;
    if(!db) db=0;
    RedisInfo.findAll({
      where: {
          md5: req.query.md5
        }
  })
  .then((redisInfo)=>{
     var r = flushall(redisInfo.host,
          redisInfo.port,
          redisInfo.password,
          db)
          res.send("Inserted");
  }).catch((err)=>{
      console.log(err);
  });
     
});

app.post("/api/add",(req,res)=>{
  var  host=req.body.host;
  var  port =req.body.port;
  var  password=req.body.password;
  
   rst = ping(host=host,
    port=port,
    password=password);
    md5T = md5(host+port); 
    console.log(md5T);
    RedisInfo.findAll({
        where: {
            md5: md5T
          }
    })
    .then((redisInfo)=>{
       
        if(redisInfo.length !== 0)
        {RedisInfo.update({ password: password }, {
            where: {
                md5: md5T
              }
          });}
        else{
       
             RedisInfo.create({md5:md5T,
                                host:host,
                                port:port,
                                password:password});
            //redisInfo.
        
        }
        res.send("done");
    }).catch((err)=>{
        console.log(err);
    });


})
app.post("/api/del",(req,res)=>{
    RedisInfo.destroy({
        where: {
            port: "6379"
          }
    })
   
        res.send("done");
   
})
app.post("/api/redis/flushall",(req,res)=>{
  var md5G= req.body.md5;
  var db = req.body.db;
  if(!db) db=0;
  RedisInfo.findAll({
    where: {
        md5: req.query.md5
      }
})
.then((redisInfo)=>{
   var r = flushall(redisInfo.host,
        redisInfo.port,
        redisInfo.password,
        db)
        res.send("Inserted");
}).catch((err)=>{
    console.log(err);
});
   
})
const db = require('./models');
db.sequelize.sync().then((req)=>{
    app.listen(5000,()=>{
        console.log("Server is running");
    });
});

