'use strict';

import Base from './base.js';

export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	__before() {
		console.log("********* fun __before *********");
	}

	__after() {
		console.log("********* fun __after *********");
	}

	indexAction() {
		//auto render template file index_index.html
		console.log("========== http://127.0.0.1:8360/test/redis ==========");
		console.log("redis config: %j", think.config("redis"));
		return this.success({a: 100});
	}

	async testAction() {
		console.log("========== http://127.0.0.1:8360/test/redis/test ==========");
		let model = this.model("rc");
		let data = await model.test().catch(()=> {
			return false;
		});
		console.log("== data: %j", data);
		if (!data) {
			return this.fail(1000, data);
		}
		return this.success(data);
	}

	async pallAction() {        //Promise.all
		console.log("========== http://127.0.0.1:8360/test/redis/pall ==========");
		let model = this.model("rc");
		let p1 = model.test();
		let p2 = model.test1();
		let [p1Data, p2Data] = await Promise.all([p1, p2]);
		return this.success({d1: p1Data, d2: p2Data});
	}

	* yieldtestAction() {
		console.log("========== http://127.0.0.1:8360/test/redis/yieldtest ==========");
		return this.success("ABCD");
	}
}