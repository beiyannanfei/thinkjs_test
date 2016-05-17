'use strict';
/**
 * db config
 * @type {Object}
 */
module.exports = {
	type: 'mongo',
	log_sql: true,
	log_connect: true,
	database: "test",
	prefix: 'think_',
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