# Redis Monitor
---------------------------------------

### Technology Stack

This redis monitor uses a number of open source projects to work properly:

* **[Node.js](https://nodejs.org/)** - evented I/O for the backend
* **[Express](http://expressjs.com/)** - fast node.js network app framework
* **[Sqlite](https://www.sqlite.org/)** - database 
* **[Sequelize](https://sequelize.org/)** - ORM


Note:All other dependencies and dev-dependencies are mentioned in packege.JSON. </p>


### Installation

this requires [Node.js](https://nodejs.org/) v4+ to run, [NPM(Node Packege Manager)]() for handling node package, [sqlite]() to database handling.

1: Clone this Repository

2: Change diractory

3: Install the dependencies

```sh
$ npm install
```

4: Now you are ready for run Application
```sh
$ npm start
```
You can see this output in Teminal
```sh

> nodemon index.js

[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`

```

### BackEnd(API)

#### Visitor API
  1. GET : /api/redis_list
     
  2. GET : /api/redis_info
     
  3. GET : /api/ping
     
  4. GET : /api/redis_monitor
    
  5. POST & GET : /api/redis/flushall
  6. POST : /api/add
  7. POST : /api/del
   

### Models(Database Schemas)
#### RedisInfo Schema
```
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
```

 



### Conatact Details
* Name: **Ujjwal Saraswat**
* Phone: **+91 8209577436**
* Email: **17ucs172@lnmiit.ac.in**


