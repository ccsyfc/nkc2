//this is a template for mailSecrets.js

//copy, rename to 'mailSecrets.js' then tweak the settings

var alidayu = require('alidayu-node');

module.exports = {
  smtpConfig:{
    host: 'smtp.exmail.qq.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'mailusername',
      pass: 'mailpassword'
    }
  },

  sendSMS: function(phone, code, callback){
    new alidayu('23632480', '1b4965972ef0b5202b8c7441d64c503f').smsSend({
      sms_free_sign_name: '论坛注册',  //短信签名
      sms_param: {"code": code, "product": "科创论坛"},
      rec_num: phone,
      sms_template_code: 'SMS_43555002'//大于平台手机找回密码模板号
    }, callback)
  },

  senderString:'"中国科创联互联网中心" <it@kc.ac.cn>'
}
