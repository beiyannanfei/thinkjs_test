'use strict';

import Base from './base.js';

export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	indexAction() {
		//auto render template file index_index.html
		console.log("========== http://127.0.0.1:8360/test/mongo ==========");
		return this.success({a: 100});
	}

	async findAction() {
		console.log("========== 127.0.0.1:8360/test/mongo/find ==========");
		let model = this.model("user");
		let data = await model.where({name: "aaa"}).find();
		console.log("findAction data: %j", data);
		return this.success(data);
	}

	* findes6Action() {     //yield 处理方式，功能同上
		console.log("========== curl 127.0.0.1:8360/test/mongo/findes6 ==========");
		let model = this.model("user");
		let data = yield model.where({name: "aaa"}).find();
		console.log("findes6Action data: %j", data);
		return this.success(data);
	}

	async getindexAction() {
		console.log("========= 127.0.0.1:8360/test/mongo/getindex ========");
		let model = this.model("user");
		let indexes = await model.getIndexes();
		console.log("getindexAction indexes: %j", indexes);
		return this.success(indexes);
	}

	async aggreAction() {
		console.log("========= 127.0.0.1:8360/test/mongo/aggre ========");
		let model = this.model("user");
		let data = await model.match();
		console.log("aggreAction data: %j", data);
		return this.success(data);
	}

	* addAction() {
		console.log("========= 127.0.0.1:8360/test/mongo/add ========");
		let model = this.model("user");
		let inserId = yield model.add({name: "aaa", value: 123});
		console.log("addAction inserId: %j", inserId);
		return this.success(inserId);
	}

	* multiaddAction() {
		console.log("========= 127.0.0.1:8360/test/mongo/multiadd ========");
		let model = this.model("user");
		let insertId = yield model.addMany([
			{name: "xxx", pwd: "yyy"},
			{name: "xxx1", pwd: "yyy1"}
		]);
		console.log("multiaddAction insertId: %j", insertId);
		return this.success(insertId);
	}

	* thenaddAction() {
		console.log("========= 127.0.0.1:8360/test/mongo/thenadd ========");
		let model = this.model("user");
		let result = yield model.thenAdd({name: "xxxy", pwd: "yyy"}, {name: "xxxy"});
		console.log("thenaddAction result: %j", result);
		return this.success(result);
	}

	async updateAction() {
		console.log("========= 127.0.0.1:8360/test/mongo/update ========");
		let model = this.model("user");
		let affectedRows = await model.where({name: "aaa"}).update({email: "admin@thinkjs.org"});
		console.log("updateAction affectedRows: %j", affectedRows);
		return this.success(affectedRows);
	}

	async listAction() {
		console.log("========= 127.0.0.1:8360/test/mongo/list ========");
		let model = this.model("user");
		let data = await model.where({name: "aaa"}).find();
		console.log("listAction data: %j", data);
		return this.success(data);
	}

	async selectAction() {
		console.log("========= 127.0.0.1:8360/test/mongo/select ========");
		let model = this.model("user");
		let data = await model.where({name: "aaa"}).limit(5).select();
		console.log("selectAction is null: %j", think.isEmpty(data));   //判断结果是否为空
		console.log("selectAction data: %j", data);
		return this.success(data);
	}

	async pageAction() {
		console.log('========= curl "127.0.0.1:8360/test/mongo/page?page=1" ========');
		let model = this.model("user");
		//如果传递的当前页数超过了页数范围，可以通过传递参数进行修正。true 为修正到第一页， false 为修正到最后一页，即： countSelect(true) 或 countSelect(false)。
		let data = await model.where({name: "aaa"}).page(this.get("page"), 2).countSelect(false);
		console.log("pageAction data: %j", data);
		return this.success(data);
	}

	async deleteAction() {
		console.log('========= curl "127.0.0.1:8360/test/mongo/delete" ========');
		let model = this.model("user");
		let affectedRows = await model.where({"pwd" : 1234}).delete();
		console.log("deleteAction affectedRows: %j", affectedRows);
		return this.success(affectedRows);
	}
}