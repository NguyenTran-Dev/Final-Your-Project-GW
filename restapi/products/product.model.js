const sql = require('../db_connection');

const Products = function (products) {
  this.name = products.name;
  this.price = products.price;
  this.description = products.description;
  this.img = products.img;
  this.type = products.type;
  this.color = products.color;
  this.stock = products.stock;
  
};


  Products.create = (newProduct, result) => {
    sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
<<<<<<< HEAD
  
      // console.log("created products: ", { id: res.insertId, ...newProduct });
=======
>>>>>>> 8507f17 (code payment VNpay)
      result(null, { id: res.insertId, ...newProduct });
    });
  };
  
  Products.getProducts = ( req, result) => {
      const keySearch = req.query?.keySearch || '';
    sql.query(`SELECT * FROM products WHERE name like '%${keySearch}%' or type like '%${keySearch}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
<<<<<<< HEAD
        // console.log("found products: ", res );
=======
>>>>>>> 8507f17 (code payment VNpay)
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };

  Products.updateById = (id, Products, result) => {
    sql.query(`UPDATE products SET name = ?, type = ?, price = ?, stock = ?, color = ?, description = ? WHERE id = ${id}`,
      [Products.name, Products.type, Products.price, Products.stock, Products.color, Products.description],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows === 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        // console.log("updated product: ", { id: id, ...Products });
        result(null, { id: id, ...Products });
      }
    );
  };

  // Delete a Customer with the specified customerId in the request
  Products.remove = (id, result) => {
  sql.query("DELETE FROM products WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows === 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted product with id: ", id);
    result(null, res);
  });
};

  module.exports = Products;
