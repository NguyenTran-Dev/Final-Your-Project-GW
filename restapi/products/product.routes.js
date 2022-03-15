module.exports = app => {
    const Products = require("./product.controller.js");
  
    // Create a new products
    app.post("/products", Products.create);
  
    app.get("/products/search", Products.getProducts);

    // day la update lam lan 2
    app.put("/products/update/:id", Products.update);

    // Delete a product with Id
    app.delete("/products/delete/:id", Products.delete);

  };

