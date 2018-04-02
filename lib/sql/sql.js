 class SQL {

	constructor() {}

	//注册
	registerSQL(o) {
		return "INSERT INTO `t_user` (`pwd`, `phone`, `registerTime`, `agreement`) VALUES ('" + o.pwd + "','" + o.phone + "','" + o.registerTime + "','" + o.agree + "')";
	}

	//查询t_user表一个字段信息,查看是否有该信息.
	findOneSQL(o, field) {
		return "SELECT `" + field + "` FROM `t_user` WHERE `" + field + "` = '" + o[field] + "'";
	}

	// //登录
	loginSQL(o) {
		return "SELECT `phone`, `pwd`, `nickname`, `uid` FROM `t_user` WHERE `phone` = '" + o.phone + "' AND `pwd` = '" + o.pwd + "'";
	}

	// //修改t_user loginStatus字段 0: 离线, 1: 在线
	updateLoginStatusSQL (o, val) {
		return "UPDATE `t_user` SET `loginStatus` = " + val + " WHERE `phone` = '" + o.phone + "'";
	}

		// //修改t_user loginStatus字段 0: 离线, 1: 在线
	dateLoginStatusSQL (o, val) {
		return "UPDATE `t_user` SET `loginStatus` = " + val + "";
}
	//首页查询
	findHomeAllSQL() {
		return 	["SELECT * FROM `t_banner` WHERE `frag` = 100",
			// "SELECT * FROM `t_classify` LIMIT 3",
		"SELECT * FROM `t_product` WHERE `pfrag` = 1003 OR `pfrag` = 1007 OR `pfrag` = 1004"]
	}

	// clsifySQL(){
	// return "SELECT * FROM `t_product` WHERE `pfrag` = 1003 OR `pfrag` = 1007 OR `pfrag` = 1004";
	// }


	// // 查询产品详情
	findProductDetailSQL (id) {
		return [
			"SELECT * FROM `t_productdetail` WHERE `pid` = " + id
	// 		"SELECT * FROM `t_address` WHERE `uid` = " + o.uid + " AND `defaultAddress` = 1"
		]
	}

	shoppingcart2SQL () {
		return ["SELECT * FROM `t_shoppingcart` WHERE `pfag` = 1001",
				"SELECT * FROM `t_shoppingcart` WHERE `pfag` = 1002"]
	}
	//护肤方案
	schemeCSQL () {
		return ["SELECT * FROM `t_productdetail` WHERE `farg` = 1006",
				"SELECT * FROM `t_productdetail` WHERE `farg` = 1007"]
	}
	//护肤步骤
	skincarestepsCSQL () {
		return ["SELECT * FROM `t_productdetail` WHERE `farg` = 1008",
				"SELECT * FROM `t_productdetail` WHERE `farg` = 1009",
				"SELECT * FROM `t_productdetail` WHERE `farg` = 1010"]
	}
	// 购买添加
	shoppingsSQL (o) {
		return "INSERT INTO `t_shoppings` (`farg`,`sales`,`did`,`sname`, `price`,`imgurl`,`code`,`addres`,`numprice`) VALUES ('" + o[7]+ "','" + o[6]+ "','" + o[2]+ "','" + o[0] + "','" + o[1] + "','" + o[3] + "','" + o[4] + "','" + o[5] + "','" + o[8] + "')";
	}
	// 购买删除
	deletshoppSQL (o) {
		return "delete from `t_shoppings` where `did` = '" + o.did + "'";
	}
	// 购买
	shoSQL () {
		return ["SELECT * FROM `t_shoppings` WHERE `farg` = 1005"]
	}

// delete from `t_settlement` where `sid` = 8
	//支付添加
	setcompilerSQL(o) {
		return "INSERT INTO `t_settlement` (`sid`, `name`, `price`, `imgurl`, `sales`, `addres`, `code`, `farg`, `numprice`) VALUES ('" + o.did + "','" + o.sname + "','" + o.price + "','" + o.imgurl + "','" + o.sales + "','" + o.addres + "','" + o.code + "','" + o.farg + "','" + o.numprice + "')";
	}
	//支付添加
	compilerSQL(o) {
		return "INSERT INTO `t_settlement` (`sid`, `name`, `price`, `imgurl`, `sales`, `addres`, `code`, `farg`, `numprice`) VALUES ('" + o.did + "','" + o.sname + "','" + o.price + "','" + o.imgurl + "','" + o.sales + "','" + o.addres + "','" + o.code + "','" + o.farg + "','" + o.numprice + "')";
	}
	//支付
	compSQL () {
		return ["SELECT * FROM `t_settlement` WHERE `farg` = 1005"]
	}

	// 支付删除
	deletcompilerSQL (o) {
		return "delete from `t_settlement` where `sid` = '" + o.sid + "'";
	}

	//等待发货添加
	pendingdeliverySQL(o) {
		return "INSERT INTO `t_pendingdelivery` (`did`, `name`, `price`, `imgurl`, `addres`,`numprice`,`sales`,`code`,`farg`) VALUES ('" + o.sid + "','" + o.name + "','" + o.price + "','" + o.imgurl + "','" + o.addres + "','" + o.numprice + "','" + o.sales + "','" + o.code + "','" + o.farg + "')";
	}
	// 等待发货
	pendingSQL () {
		return ["SELECT * FROM `t_pendingdelivery` WHERE `farg` = 1005"]
	}
	// 购物车添加
	settlementSQL (o) {
		return "INSERT INTO `t_compiler` (`farg`,`sales`,`did`,`sname`, `price`,`imgurl`,`code`,`addres`,`numprice`) VALUES ('" + o[7]+ "','" + o[6]+ "','" + o[2]+ "','" + o[0] + "','" + o[1] + "','" + o[3] + "','" + o[4] + "','" + o[5] + "','" + o[8] + "')";
	}
	//购物车查询
	tlementsSQL () {
		return ["SELECT * FROM `t_compiler` WHERE `farg` = 1005"]
	}
	// 购物车删除
	delettlementSQL (o) {
		return "delete from `t_compiler` where `did` = '" + o.did + "'";
	}
	// 添加set地址
	setaddresSQL (o) {
		return "INSERT INTO `t_addres` (`phone`,`city`,`username`,`province`,`region`,`setadd`,`editAddress`,`selectAddress`,`delete`,`num`) VALUES ('" + o.phone + "','" + o.city+ "','" + o.username+ "','" + o.province + "','" + o.region + "','" + o.setadd + "','" + o.editAddress+ "','" + o.selectAddress + "','" + o.delete + "','" + o.num + "')";
	}
	//set地址
	addresSQL () {
		return ["SELECT * FROM `t_addres` WHERE `farg` = 1006"]
	}
	// set地址删除
	deletaddresSQL (o) {
		return "delete from `t_addres` where `phone` = '" + o.phone + "'";
	}
	//收藏添加
	myCollectionSQL(o) {
		return "INSERT INTO `t_myCollection` (`did`, `name`, `price`, `imgurl`, `addres`,`numprice`,`sales`,`code`) VALUES ('" + o.pid + "','" + o.name + "','" + o.price + "','" + o.imgsurl + "','" + o.addres + "','" + o.textright + "','" + o.sales + "','" + o.code + "')";
	}
	//收藏查询
	collectionSQL () {
		return ["SELECT * FROM `t_myCollection` WHERE `farg` = 1007",
				"SELECT * FROM `t_myCollection2` WHERE `pfag` = 1008"]
	}
	//收藏添加
	myCollection2SQL(o) {
		return "INSERT INTO `t_myCollection2` (`pid`, `name`, `imgurl`, `price`) VALUES ('" + o.pid + "','" + o.sname + "','" + o.imgsurl + "','" + o.price + "')";
	}
	// 收藏删除
	deletmyCollection2SQL (o) {
		return "delete from `t_myCollection2` where `pid` = '" + o.pid + "'";
	}
	// 收藏删除
	deletcollection3SQL (o) {
		return "delete from `t_myCollection` where `did` = '" + o.did + "'";
	}
}
module.exports = new SQL();
// 