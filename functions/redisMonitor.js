const redis= require('redis');
const moment = require('moment');

const newRequest= (host, port, password, charset='utf8')=>{
  var  redis_rst = {};

  var start = Date.now();
  var r = redis.createClient({
      host:host, port:port, password:password
  });
  var info = r.info();
  var end = Date.now();
  info['get_time'] = (end-start)*1000;
  redis_rst['data']=info;

  return redis_rst;
}


exports.ping=(host, port, password, charset='utf8')=>{
    var  redis_rst = {};
    var r = redis.createClient({
        host:host, port:port, password:password
    });
      var info = r.info();

    redis_rst['data'] = 'Ping success!'
    return redis_rst;
}

exports.get_info =(host, port, password, charset='utf8')=>{
    var  redis_rst = {};
    redis_rst = newRequest(host, port,password,charset);
  

    
    return redis_rst;
}

exports.flushall=(host, port, password, db)=>{
    var r = redis.createClient({
        host:host, port:port, password:password, db:db
    });
    return r.flushdb();
}