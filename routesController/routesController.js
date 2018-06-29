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
		// console.log('req.body ==> ', req.body);
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

		// console.log(req.query)
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
			console.log(result);
			//判断表里是否有该用户
			if (result[0].length === 1) {
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
			console.log(err)
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
		let sqlArray = SQL.findHomeAllSQL();
		let data = {};
		let names = ['banner', 'clsify']
		sqlArray.forEach((sql, i) => {
			API.query(sql)
				.then(result => {
					data[names[i]] = result[0];
					if (i == sqlArray.length - 1) {
						res.send(data);
					}
				}) 
				
				.catch(err => {
					res.send('出错啦');
				})
		})
}
	//详情页
	productdetailController(req,res){
		let array = SQL.findProductDetailSQL(req.query.id);
		let data = {};
		let names2 = ['product']
		array.forEach((v, i) => {
			API.query(v)
				.then(result => {
					data[names2[i]] = result[0];
					if (i == array.length - 1) {
						res.send(data);
					}
				}) 
				
				.catch(err => {
					res.send(err);
				})
		})
	}

	//购物车
	shoppingCartController (req,res){
		let deletcollection3 =SQL.deletcollection3SQL(req.query);
		API.query(deletcollection3);
		console.log(deletcollection3)
		let myCollection2 =SQL.myCollection2SQL(req.query);
		API.query(myCollection2);
		let dete={};
		//生成sql语句功能
		let shoppingsql = SQL.shoppingcart2SQL(req.query);

		let shopping=['shoppingsrun','shopp'];

		shoppingsql.forEach((v,i)=>{
			//接收sql语句
		API.query(v)
		.then(result =>{
			dete[shopping[i]] = result[0];
			if( i == shoppingsql.length-1){
			res.send(dete);
		}
		})
		.catch(err =>{
			res.send('报错啦');
		})
		})
		
	}
	//购买
	pendingPaymentController(req,res){
		let sql =SQL.shoppingsSQL(req.query);
		API.query(sql)
		let array = SQL.shoSQL(req.query);
		let data = {};
		let names2 = ['pending']
		array.forEach((v, i) => {
			console.log(v)
			API.query(v)
				.then(result => {
					data[names2[i]] = result[0];
					if (i == array.length - 1) {
						res.send(data);
					}
				}) 
				
				.catch(err => {
					res.send(err);
				})
		})
	}

	//支付
	compilerController(req,res){
		let compiler =SQL.compilerSQL(req.query);
		API.query(compiler)
		// console.log(compiler)
		let delettlement =SQL.delettlementSQL(req.query);
		API.query(delettlement);
		let deletshopp=SQL.deletshoppSQL(req.query);
		API.query(deletshopp)
		let compilerarr = SQL.compSQL(req.query);
		let data = {};
		let numbers = ['compiler']
		compilerarr.forEach((v, i) => {
			API.query(v)
				.then(result => {
					data[numbers[i]] = result[0];
					if (i == compilerarr.length - 1) {
						res.send(data);
					}
				}) 
				
				.catch(err => {
					res.send(err);
				})
		})
	}
	//等待发货
	pendingDeliveryController(req,res){
		let pensql =SQL.pendingdeliverySQL(req.query);
		API.query(pensql)
		let deletcompiler=SQL.deletcompilerSQL(req.query);
		API.query(deletcompiler)
		let pendingarr = SQL.pendingSQL(req.query);
		let data = {};
		let numbers = ['pending']
		pendingarr.forEach((v, i) => {
			API.query(v)
				.then(result => {
					data[numbers[i]] = result[0];
					if (i == pendingarr.length - 1) {
						res.send(data);
					}
				}) 
				
				.catch(err => {
					res.send(err);
				})
		})
	}
	//添加收货地址
	managementAddressController(req,res){
		let deletaddres =SQL.deletaddresSQL(req.query);
		API.query(deletaddres);
		// console.log(deletaddres)
	}
	//set收货地址
	newlyIncreasedAddressController(req,res){
		let addres =SQL.setaddresSQL(req.query);
		API.query(addres);
		let setaddres = SQL.addresSQL(req.query);
		let data = {};
		let numbers = ['addre']
		setaddres.forEach((v, i) => {
			API.query(v)
				.then(result => {
					data[numbers[i]] = result[0];
					if (i == setaddres.length - 1) {
						res.send(data);
					}
				}) 
				
				.catch(err => {
					res.send(err);
				})
		})
	}

	settlementController(req,res){
		let setcompiler =SQL.setcompilerSQL(req.query);
		API.query(setcompiler);
		let settlement =SQL.settlementSQL(req.query);
		API.query(settlement);
		let tlements = SQL.tlementsSQL(req.query);
		let data = {};
		let numbers = ['settlement']
		tlements.forEach((v, i) => {
			API.query(v)
				.then(result => {
					data[numbers[i]] = result[0];
					if (i == tlements.length - 1) {
						res.send(data);
					}
				}) 
				
				.catch(err => {
					res.send(err);
				})
		})
	}
	//收藏
	myCollectionController(req,res){
		let deletmyCollection2 =SQL.deletmyCollection2SQL(req.query);
		API.query(deletmyCollection2);
		let myCollection =SQL.myCollectionSQL(req.query);
		API.query(myCollection);
		let data = {};
		let collection = SQL.collectionSQL(req.query);
		let numbers = ['settlement','collection']
		collection.forEach((v, i) => {
		API.query(v)
		.then(result => {
			data[numbers[i]] = result[0];
			if (i == collection.length - 1) {
				res.send(data);
			}
		})
		.catch(err => {
			res.send(err);
			})
		})
		
	}

	//护肤方案
	schemeController(req,res){
		let data = {};
		let scheme = SQL.schemeCSQL(req.query);
		let numbers = ['scheme','scheme1']
		scheme.forEach((v, i) => {
		API.query(v)
		.then(result => {
			data[numbers[i]] = result[0];
			if (i == scheme.length - 1) {
				res.send(data);
			}
		})
		.catch(err => {
			res.send(err);
			})
		})
	}
	//护肤步骤
	skincarestepsController(req,res){
		let data = {};
		let skincaresteps = SQL.skincarestepsCSQL(req.query);
		let numbers = ['skincaresteps','skincaresteps1','skincaresteps2']
		skincaresteps.forEach((v, i) => {
		API.query(v)
		.then(result => {
			data[numbers[i]] = result[0];
			if (i == skincaresteps.length - 1) {
				res.send(data);
			}
		})
		.catch(err => {
			res.send(err);
			})
		})
	}

}
module.exports = new RouteController();


