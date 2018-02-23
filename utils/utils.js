const SMSClient = require('@alicloud/sms-sdk');

//导入pwd加密
const crypto=require('crypto');

class Utils {
  constructor () {}

  sendMessage(phone,code) {
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
    const accessKeyId = 'LTAIGGpXUqDZiWUs';
    const secretAccessKey = 'bNoMPBG3fFDv3vRTXsKXmZ3OLQpn9F';
    //初始化sms_client
    let smsClient = new SMSClient({accessKeyId, secretAccessKey})
    //发送短信
    return smsClient.sendSMS({
      PhoneNumbers: phone,//接收短信手机号码
      SignName: '过一个年',
      TemplateCode: 'SMS_119082415',
      TemplateParam: '{"code":' + code +'}'
    });
  }

  //pwd加密功能
  addCrypto(o,field){
    //使用md5方式加密
    let md5=crypto.createHash('md5');

    //加密字段
    md5.update(o[field]);
    o[field]=md5.digest('hex');
  }

}

module.exports = new Utils();