
Application created by [ThinkJS](http://www.thinkjs.org)

## Install dependencies

```
npm install
```

## Start server

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```

主要练习在thinkjs中mongo redis的使用
mongo 
    \src\common\config\db.js
    module.exports = {
    	type: 'mongo',
    	log_sql: true,
    	log_connect: true,
    	database: "test",       //数据库名称
    	prefix: 'think_',       //表名前缀
    	user: '',
    	password: '',
    	encoding: 'utf8',
    	adapter: {
    		mongo: {
    			host: '127.0.0.1',
    			port: '27017'
    		}
    	}
    };
    src\test\controller\mongo.js   为主要练习文件
    src\common\model\user.js        为think_user表的辅助模块，只练习了mongo的特有命令aggregate的使用
    
redis
    src\common\config\redis.js
    export default {
    	host: "127.0.0.1",
    	port: 6379,
    	password: "",
    	timeout: 0,
    	log_connect: true
    };
    src\test\controller\redis.js  为redis简单操作文件
    