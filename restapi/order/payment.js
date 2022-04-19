 var express = require('express');
const vnpayConfig = require('./config/vnpay') 
var router = express.Router();
 
 router.post('/create_payment_url', function (req, res, next) {
     var ipAddr = req.headers['x-forwarded-for'] ||
         req.connection.remoteAddress ||
         req.socket.remoteAddress ||
         req.connection.socket.remoteAddress;
     var dateFormat = require('dateformat');
 
     var tmnCode = vnpayConfig.vnp_TmnCode;
     var secretKey = vnpayConfig.vnp_HashSecret;
     var vnpUrl = vnpayConfig.vnp_Url;
     var returnUrl = vnpayConfig.vnp_ReturnUrl;
 
     var date = new Date();
 
     var createDate = dateFormat(date, 'yyyymmddHHmmss');
     var orderId = dateFormat(date, 'HHmmss');
     const { amount, billId} = req.body;
     var locale = 'vn';
     var currCode = 'VND';
     var vnp_Params = {};
     vnp_Params['vnp_Version'] = '2.1.0';
     vnp_Params['vnp_Command'] = 'pay';
     vnp_Params['vnp_TmnCode'] = tmnCode;
     // vnp_Params['vnp_Merchant'] = ''
     vnp_Params['vnp_Locale'] = locale;
     vnp_Params['vnp_CurrCode'] = currCode;
     vnp_Params['vnp_TxnRef'] = orderId;
     vnp_Params['vnp_OrderInfo'] = billId;
     vnp_Params['vnp_OrderType'] = billId;
     vnp_Params['vnp_Amount'] = amount * 100;
     vnp_Params['vnp_ReturnUrl'] = returnUrl;
     vnp_Params['vnp_IpAddr'] = ipAddr;
     vnp_Params['vnp_CreateDate'] = createDate;
 
     vnp_Params = sortObject(vnp_Params);
 
     var querystring = require('qs');
     var signData = querystring.stringify(vnp_Params, { encode: false });
     var crypto = require("crypto");     
     var hmac = crypto.createHmac("sha512", secretKey);
     var signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex"); 
     vnp_Params['vnp_SecureHash'] = signed;
     vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
 
     res.status(200).json({url: vnpUrl})
 });
 
 function sortObject(obj) {
   var sorted = {};
   var str = [];
   var key;
   for (key in obj){
     if (obj.hasOwnProperty(key)) {
     str.push(encodeURIComponent(key));
     }
   }
   str.sort();
     for (key = 0; key < str.length; key++) {
         sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
     }
     return sorted;
 }
 
 module.exports = router;