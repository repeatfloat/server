/*
	protocol=>zgree
	100: 同意协议
	101: 不同意协议
*/

module.exports={
	protocal:{
		isAgree:101
	},
	//注册提示
	register:{
		success:{
			msg:'注册成功啦',
			statusCode:200
		},
		info:{
			msg:'该号码已被注册',
			statusCode:201
		},
		error:{
			msg:'注册失败',
			statusCode:202
		}

	},
	//登录提示
	login: {
		success: {
			msg: '登录成功啦',
			statusCode: 300
		},
		info: {
			msg: '用户名或者密码错误',
			statusCode: 301
		},
		error: {
			msg: '该用户不存在',
			statusCode: 302
		}
	},
	//重置密码提示
	resetPassword:{
		success:{
			msg:'成功啦',
			statusCode:200
		},
		error:{
			msg:'该用户不存在',
			statusCode:202
		}
	}
}