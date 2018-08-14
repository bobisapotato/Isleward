let fs = require('fs');
let util = require('util');

module.exports = {
	db: null,
	file: '../../data/storage.db',
	exists: false,

	buffer: [],

	tables: {
		character: null,
		characterList: null,
		stash: null,
		skins: null,
		login: null,
		leaderboard: null,
		customMap: null,
		mail: null,
		customChannels: null,
		error: null,
		modLog: null,
		accountInfo: null
	},

	init: function (cbReady) {
		let sqlite = require('sqlite3').verbose();
		this.exists = fs.existsSync(this.file);
		this.db = new sqlite.Database(this.file, this.onDbCreated.bind(this, cbReady));
	},
	onDbCreated: function (cbReady) {
		let db = this.db;
		let tables = this.tables;
		let scope = this;
		db.serialize(function () {
			for (let t in tables) {
				db.run(`
					CREATE TABLE ${t} (key VARCHAR(50), value TEXT)
				`, scope.onTableCreated.bind(scope, t));
			}

			cbReady();
		}, this);

		this.exists = true;
	},
	onTableCreated: async function (table) {

	},

	//ent, field
	get: function (options) {
		let key = options.ent;
		let table = options.field;

		options.query = `SELECT * FROM ${table} WHERE key = '${key}' LIMIT 1`;

		this.db.get(options.query, this.done.bind(this, options));
	},

	getAsync: async function (options) {
		return await this.queue({
			type: 'get',
			options: options
		});
	},

	delete: function (options) {
		let key = options.ent;
		let table = options.field;

		options.query = `DELETE FROM ${table} WHERE key = '${key}'`;

		this.db.run(options.query, this.done.bind(this, options));
	},

	//ent, field, value
	set: function (options) {
		let key = options.ent;
		let table = options.field;

		this.db.get(`SELECT 1 FROM ${table} where key = '${key}'`, this.doesExist.bind(this, options));
	},
	doesExist: function (options, err, result) {
		let key = options.ent;
		let table = options.field;

		let query = `INSERT INTO ${table} (key, value) VALUES('${key}', '${options.value}')`;

		if (result)
			query = `UPDATE ${table} SET value = '${options.value}' WHERE key = '${key}'`;

		this.db.run(query, this.done.bind(this, options));
	},

	setAsync: async function (options) {
		await this.queue({
			type: 'set',
			options: options
		});
	},

	queue: async function (config) {
		let resolve = null;
		let promise = new Promise(function (res) {
			resolve = res;
		});

		this.buffer.push({
			resolve: resolve,
			config: config
		});

		this.process();

		return promise;
	},

	process: async function () {
		let next = this.buffer[0];
		if (!next)
			return;

		let config = next.config;
		let options = config.options;

		let res = null;

		try {
			if (config.type === 'get')
				res = await this.processGet(options);
			else if (config.type === 'set')
				await this.processSet(options);
		} catch (e) {
			return;
		}

		this.buffer.splice(0, 1);
		next.resolve(res);

		setTimeout(this.process.bind(this), 10);
	},

	processGet: async function (options) {
		let res = await util.promisify(this.db.get.bind(this.db))(`SELECT * FROM ${options.table} WHERE key = '${options.key}' LIMIT 1`);
		if (res) {
			res = res.value;

			if (options.clean) {
				res = res
					.split('`')
					.join('\'')
					.replace(/''+/g, '\'');
			}
			
			if (!options.noParse)
				res = JSON.parse(res);
		} else if (!options.noParse && !options.noDefault)
			res = options.isArray ? [] : {};

		return res;
	},

	processSet: async function (options) {
		let table = options.table;
		let key = options.key;
		let value = options.value;

		let exists = await util.promisify(this.db.get.bind(this.db))(`SELECT * FROM ${table} WHERE key = '${key}' LIMIT 1`);

		let query = `INSERT INTO ${table} (key, value) VALUES('${key}', '${value}')`;
		if (exists)
			query = `UPDATE ${table} SET value = '${value}' WHERE key = '${key}'`;

		await util.promisify(this.db.run.bind(this.db))(query);
	},

	done: function (options, err, result) {
		result = result || {
			value: null
		};

		if (options.callback)
			options.callback(result.value);
	}
};
