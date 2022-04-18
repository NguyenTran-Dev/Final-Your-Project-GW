/** @format */

// ﻿require('rootpath')();
const express = require('express');
const cors = require('cors');
const payment = require('./order/payment');
const bodyParser = require('body-parser');
const errorHandler = require('./customers/middleware/error-handler');
const app = express();
// const paypal = require('paypal-rest-sdk');
// paypal.configure({
//   mode: 'sandbox', //sandbox or live
//   client_id:
//     'AYYcKUrDIfHkO3Tq_UQAft3cfZpJ7H-y5v_lNtkbrePAKOeXlztapCbgFnewmHVGIwAH_pvwTHg_wDNr',
//   client_secret:
//     'EOIyFZRNJrS0Pqd_2-UwHugWoPlotH4jRxwxFyBYJnpURtpdiTS-M5HPlMC4hEzadS8oRQikNwJGtOVp',
// });


// app.post('/pay', (req, res) => {
//   const create_payment_json = {
//     "intent": "sale",
//     "payer": {
//         "payment_method": "paypal"
//     },
//     "redirect_urls": {
//         "return_url": "http://localhost:3000/checkout",
//         "cancel_url": "http://www.example.com.br/cancel"
//     },
//     "transactions": [
//         {
//             "amount": {
//                 "currency": "USD",
//                 "total": "200.00",
//                 "details": {
//                     "shipping": "10.00",
//                     "subtotal": "190.00"
//                 }
//             },
//             "item_list": {
//                 "items": [
//                     {
//                         "name": "Foto 1",
//                         "currency": "USD",
//                         "sku": "123",
//                         "quantity": "1",
//                         "price": "190.00"
//                     }
//                 ]
//             },
//             "description": "Payment description"
//         }
//     ]
//     }
//   paypal.payment.create(create_payment_json, function (error, payment) {
//     if (error) {
//         throw error;
//     } else {
//       for(let i = 0;i < payment.links.length;i++){
//               if (payment.links[i].rel === 'approval_url') {
//                 console.log(payment.links[i].href)
//                 res.redirect(payment.links[i].href);
//               }
//             }
//     }
//   })
// });
//    app.get('/checkout', (req, res) => {
//     const payerId = req.query.PayerID;
//     const paymentId = req.query.paymentId;
//     const execute_payment_json = {
//       "payer_id": payerId,
//       "transactions": [{
//           "amount": {
//               "currency": "USD",
//               "total": "200.00"
//           }
//       }]
//     };
//     paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
//       if (error) {
//           console.log(error.response);
//           throw error;
//       } else {
//           console.log(JSON.stringify(payment));
//       }
//    });
//    });
   
// middleware
app.use(cors({origin:true}));
app.use(bodyParser.json());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// require("./customers/customer.routes.js")(app);
require('./products/product.routes.js')(app);
require('./comments/comments.routes.js')(app);
require('./order/order.routes.js')(app);
app.use('/customer', require('./customers/customer.controller'));

app.use('/payment', payment);

app.use(errorHandler);

app.listen(5000, () => {
  console.log('RESTful API server started on:  5000');
});
