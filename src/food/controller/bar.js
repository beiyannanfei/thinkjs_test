'use strict';

import Base from './base.js';

export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	indexAction() {
		//auto render template file index_index.html
		console.log("========== http://127.0.0.1:8360/food/bar ==========");
		return this.success({a: 100});
	}

	fooAction() {
		console.log("========== http://127.0.0.1:8360/food/bar/foo ==========");
		return this.success({a: 1324});
	}

	async findAction() {
		console.log("========== 127.0.0.1:8360/food/bar/find ==========");
		let model = this.model("user");
		let data = await model.where({name: "aaa"}).find();
		console.log("findAction data: %j", data);
		return this.success(data);
	}

	async getindexAction() {
		console.log("========= 127.0.0.1:8360/food/bar/getindex ========");
		let model = this.model("user");
		let indexes = await model.getIndexes();
		console.log("getindexAction indexes: %j", indexes);
		return this.success(indexes);
	}

	async aggreAction() {
		console.log("========= 127.0.0.1:8360/food/bar/aggre ========");
		let model = this.model("user");
		let data = await model.match();
		console.log("aggreAction data: %j", data);
		return this.success(data);
	}
}