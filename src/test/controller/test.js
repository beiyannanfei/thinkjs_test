'use strict';

import Base from './base.js';

export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	__before() {
		console.log("************* fun __before *************");
	}

	indexAction() {
		//auto render template file index_index.html
		console.log("=========== http://127.0.0.1:8360/test/test ===========");
		this.success("test");       //如果加了return 则__after操作不会执行
	}

	__after() {
		console.log("************* fun __after *************");
	}

	__call() {      //没有的匹配项的就会到这里  eg. http://127.0.0.1:8360/test/test/add
		console.log("************* fun __call *************");
		this.success("call");
	}

	getAction() {
		console.log("=========== 'http://127.0.0.1:8360/test/test/get?a=10&b=20' ===========");
		let param = this.get();
		console.log("==== param: %j", param);
		this.success(param);
	}

	postAction() {
		console.log('=========== "http://127.0.0.1:8360/test/test/post"  -d "c=30&d=40" ===========');
		let param = this.post();
		console.log("==== param: %j", param);
		this.success(param);
	}

	getandpostAction() {
		console.log('=========== curl "http://127.0.0.1:8360/test/test/getandpost?a=10&b=20" -d "c=30&d=40" ===========');
		let getParam = this.get();
		let postParam = this.post();
		console.log(this.param("a"));   //this.param() 可以获取所有方法的参数
		console.log(this.param("d"));
		console.log("=========== getParam: %j, postParam: %j", getParam, postParam);
		this.success({getParam: getParam, postParam: postParam});
	}

	funAction() {       //thinkjs一些方法
		console.log("=========== 'http://127.0.0.1:8360/test/test/fun' ===========");
		let isGet = this.isGet();
		let isPost = this.isPost();
		let isAjax = this.isAjax();
		let ip = this.ip();
		console.log("==== isGet: %j, isPost: %j, isAjax: %j, ip: %j", isGet, isPost, isAjax, ip);
		this.redirect("getandpost");    //会跳转到getandpostAction，如果设置为"http://www.baidu.com"则会调整到百度
		this.success({isGet: isGet, isPost: isPost, isAjax: isAjax, ip: ip});
	}

	actionAction() {
		console.log("=========== 'http://127.0.0.1:8360/test/test/action' ===========");
		this.action("mongo.findAction", "");
		this.success("action");
	}
}