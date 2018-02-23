const Utils = require(__basename + '/utils/utils.js');

const API = require(__basename + '/service/api.js');

const SQL = require(__basename + '/lib/sql/sql.js');

const common = require(__basename + '/common/common.js');

class RouteController {
	constructor () {}
	//短信验证码功能
	sendMessageController (req, res) {

		// console.log(req.query);
		// res.send('hellowold');

		//随机生成6位验证码
		let time = new Date().getTime().toString();
		let code = time.slice(time.length - 6);
		 res.json({code});
		// Utils.sendMessage(req.query.phone,code)
		// 	.then((data) => {
		//     let {Code} = data;
		//     if (Code === 'OK') {
		//        //处理返回参数
		//        res.json({code: code, msg: '发送短信验证码成功', status: 1});
		//     }
		// 		}, (err) => {
		//     	console.log(err)
		//     	res.json({msg: '发送短信验证码失败', status: 0});
		// 	})
	}
	//注册工能
	registerController(req,res){
		console.log('req.body ==> ', req.body);
		//req.query 请求参数, GET请求携带参数

		//req.body 请求参数, POST请求携带参数
		// console.log(req.query)

		//导入sql语句,查询手机号是否被注册.
		let selectSQL=SQL.findOneSQL(req.body,'phone');
		API.query(selectSQL)
		.then(result=>{
			// console.log(result)
			if (result[0].length === 1) {
					res.json(common.register.info);
				} else {
				//如果没有被注册,则执行sql输入语句
				//生成sql语句之前加密pwd
				Utils.addCrypto(req.body,'pwd')

				//生成sql语句功能
				let sql =SQL.registerSQL(req.body);
				// console.log(sql)

				API.query(sql)
				.then(selectSQL =>{
					res.json(common.register.success);
				})
				.catch(err=>{
					res.json(common.register.error);
				})
			}
			

			// res.send(result[0]);
		})
		.catch(err=>{
			// console.log('result[0]')
			res.json(common.register.error);
		})
	}

	//重置密码
	resetPasswordController(req,res){
		//生成sql语句功能
		let sql=SQL.findOneSQL(req.query);
		//接收sql语句
		API.query(sql)

		console.log(req.query)
		.then(selectSQL =>{
			//判断表里是否有该用户
			if (result[0].length === 1) {
				res.send(common.resetPassword.error);
			}else {
			
		}})
		.catch(err=>{
			res.json(common.resetPassword.error);
		})
	}

	//登录功能
	loginController(req,res){
		//加密pwd
		Utils.addCrypto(req.body, 'pwd');
		//生成sql语句功能
		let sql = SQL.loginSQL(req.body);
		//接收sql语句
		API.query(sql)

		.then(result => {
			//判断表里是否有该用户
			if (result[0].length === 1) {
				console.log(result[0][0].phone)
			//如果有就登录成功啦
			//登录成功后修改用户登录信息
			// common.login.success.uid = result[0][0].uid;
			common.login.success.phone = result[0][0].phone;
			//用户名称
			common.login.success.nickname = result[0][0].nickname;
			//1:登录状态
			let updatesql = SQL.updateLoginStatusSQL(req.body, 1);
			API.query(updatesql)
			
				.then(result =>{
					res.send(common.login.success);
				})
				.catch(err =>{
					res.json(common.login.info);
				})
				
			}else{
				res.json(common.login.error);
			}
		})
		.catch(err => {
			res.json(common.login.error);
		})
	}
	//退出登录
	mideaController (req,res){
		//生成sql语句功能
		let updatesql = SQL.dateLoginStatusSQL(req.body,0);
		//接收sql语句
		API.query(updatesql)
		.then(result =>{
			console.log('成功啦')
		})
		.catch(err =>{
			res.json('报错啦');
		})
	}

	//首页功能
	indexController (req, res) {
		let sql = SQL.findHomeAllSQL();
		API.query(sql)
		.then(result => {
			res.send(result[0]);
		})
		.catch(err=>{
			res.send('出错啦');

		})
	}
}
module.exports = new RouteController();
