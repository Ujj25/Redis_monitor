const { sequelize, DataTypes } = require("sequelize");
const moment = require('moment');

module.exports = (sequelize, DataTypes)=>{
    const RedisInfo = sequelize.define("RedisInfo",{
        md5 :{
            type: DataTypes.STRING,
            primaryKey: true
        },
        host:{
            type: DataTypes.STRING,
        },
        port:{
            type: DataTypes.INTEGER,
            defaultValue:6379
        },
        password:{
            type: DataTypes.STRING,

        },
        add_time:{
            type: DataTypes.DATE,
            defaultValue:moment()
        }
    })

    return RedisInfo;
}