'use strict';

import Base from './base.js';

export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	indexAction() {
		//auto render template file index_index.html
		console.log("=========== http://127.0.0.1:8360/test ===========");
		console.log(think.config("redis"));
		return this.display();
	}
}