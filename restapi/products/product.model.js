const sql = require('../db_connection');

const Products = function (products) {
  this.name = products.name;
  this.price = products.price;
  this.description = products.description;
  // this.img = products.img;
  this.type = products.type;
  this.color = products.color;
  this.stock = products.stock;
  
};


  Products.create = (newProduct, result) => {
    sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created products: ", { id: res.insertId, ...newProduct });
      result(null, { id: res.insertId, ...newProduct });
    });
  };
  
  Products.getProducts = ( req, result) => {
    //   const { productsName, productsType } = req.query;
      const keySearch = req.query?.keySearch || '';
    sql.query(`SELECT * FROM products WHERE name like '%${keySearch}%' or type like '%${keySearch}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found products: ", res );
        result(null, res);
        return;
      }
  
      // not found products with the name
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
  
        console.log("updated product: ", { id: id, ...Products });
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