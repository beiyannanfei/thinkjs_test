'use strict';
/**
 * model
 */
export default class extends think.model.mongo {
	match() {
		console.log("== begin match");
		let condition = [
			{$match: {"name": "aaa"}},
			{$group: {_id: 1, total: {$sum: "$pwd"}, count: {$sum: 1}}}
		];
		console.log("condition: %j", condition);
		return this.aggregate(condition);
	}
}