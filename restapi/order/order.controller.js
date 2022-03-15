const Order = require("./order.model.js");

// Create and Save a new Comment
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    };

    const order = new Order  ({
        status: req.body.status,
        total: req.body.total,
        customer_id: req.body.customer_id,
        cart: req.body.cart
    });

    Order.create(order, ( data) => {
         res.send(data);
      });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Order.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving order."
          });
        else res.send(data);
      });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Order.findById(req.params.order_id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found  order_detail with order_id ${req.params.order_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving  order_detail with order_id " + req.params.order_id
            });
          }
        } else res.send(data);
      });
};

exports.findByCustomer = (req, res) => {
  Order.findByCustomerId(req.params.customer_id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found  order with customer_id ${req.params.customer_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving  order with customer_id " + req.params.customer_id
            });
          }
        } else res.send(data);
      });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      Order.updateStatusByIdOrder(
        req.params.id,
        new Order(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found order with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating order with id " + req.params.id
              });
            }
          } else res.send(data);
        }
      );
};

// Delete a Order with the specified Order_id in the request
exports.delete = (req, res) => {
  Order.remove(req.params.order_id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Order with id ${req.params.order_id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete order with id " + req.params.order_id
            });
          }
        } else res.send({ message: `Order was deleted successfully!` });
      });
};

