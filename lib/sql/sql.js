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
		return "SELECT * FROM `t_banner` WHERE `frag` = 100";
			// "SELECT * FROM `t_classify` LIMIT 3",
			// "SELECT * FROM `t_product` WHERE `pfrag` = 1003 OR `pfrag` = 1007 OR `pfrag` = 1004"
		
	}

	// // 查询产品详情
	// findProductDetailSQL (o) {
	// 	return [
	// 		"SELECT * FROM `t_productdetail` WHERE `pid` = " + o.id,
	// 		"SELECT * FROM `t_address` WHERE `uid` = " + o.uid + " AND `defaultAddress` = 1"
	// 	]
	// }

}

module.exports = new SQL();