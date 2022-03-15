module.exports = app => {
    const comments = require("./comments.controller.js");
  
    // Create a new Customer
    app.post("/comments", comments.create);
  
    // Retrieve all Customers
    app.get("/comments", comments.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/comments/:product_id", comments.findOne);
  
    // Update a Customer with customerId
    app.put("/comments/:commentId", comments.update);
  
    // Delete a Customer with customerId
    app.delete("/comments/:commentId", comments.delete);
  
  };
  