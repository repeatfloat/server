let server = {
	host: '127.0.0.1',
	port: '5000'
};

exports.mysqlOptions = {
	host: server.host,
	user: 'root',
	password: '',
	//数据库名称
	database: 'mysql'
}

exports.server = server;