// ﻿require('rootpath')();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./customers/middleware/error-handler');
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require("./customers/customer.routes.js")(app);
require("./products/product.routes.js")(app);
require("./comments/comments.routes.js")(app);
require("./order/order.routes.js")(app);
app.use('/customer', require('./customers/customer.controller'));
app.use(errorHandler);

app.listen(5000, () => {
    console.log('RESTful API server started on:  5000');
});
