const RouteController = require(__basename + '/routesController/routesController.js');
exports.routes = function (app) {
	//短信
	app.get('/message', RouteController.sendMessageController);
	//注册
	app.post('/register', RouteController.registerController);
	//登录
	app.post('/login', RouteController.loginController);
	//首页
	app.get('/index', RouteController.indexController);
	//重置密码
	app.get('/resetPassword', RouteController.resetPasswordController);
	//退出登录
	app.post('/midea', RouteController.mideaController);
	//产品详情
	app.get('/productdetail', RouteController.productdetailController);
	//购物车
	app.get('/shoppingCart', RouteController.shoppingCartController);
	//购买
	app.get('/pendingPayment', RouteController.pendingPaymentController);
	//支付
	app.get('/compiler', RouteController.compilerController);
	//等待发货
	app.get('/pendingDelivery', RouteController.pendingDeliveryController);
}
