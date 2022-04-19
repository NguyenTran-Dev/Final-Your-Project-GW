/** @format */
const express = require('express');
const cors = require('cors');
const payment = require('./order/payment');
const bodyParser = require('body-parser');
const errorHandler = require('./customers/middleware/error-handler');
const app = express();
// middleware
app.use(cors({origin:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// require("./customers/customer.routes.js")(app);
require('./products/product.routes.js')(app);
require('./comments/comments.routes.js')(app);
require('./order/order.routes.js')(app);
app.use('/customer', require('./customers/customer.controller'));
app.use('/payment', payment);
app.use(errorHandler);
app.listen(5000, () => {
  console.log('RESTfull API server started on:  5000');
});
