'use strict';
/**
 * model
 */
var redis = require("redis");
var redisConfig = think.config("redis");
var rc = redis.createClient(redisConfig.port, redisConfig.host);

export default class extends think.model.base {
	test() {
		return new Promise((resolve, reject) => {
			rc.KEYS("*", function (err, data) {
				if (!!err) {
					return reject(err);
				}
				console.log("rc test data: %j", data);
				resolve(data);
			});
		})
	}

	test1() {
		return new Promise((resolve, reject) => {
			rc.GET("aaa", function (err, data) {
				if (!!err) {
					return reject(err);
				}
				console.log("rc test1 data: %j", data);
				resolve(data);
			});
		})
	}
}
