const Products = require("./product.model.js")
const multer = require('multer');
const shortid = require('shortid');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, '../public/Images/product')
  }
  ,
  filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true)
  } else {
      cb(null, false)
  }
}
exports.upload = multer({
  storage: storage,
  fileFilter: fileFilter
})



exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
  };
    const product = new Products ({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      img:  `Images/product/${req.file.filename}`,
      type: req.body.type,
      color: req.body.color,
      stock: req.body.stock,
    });
      Products.create(product, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Customer."
          });
        else res.send(data);
      });
};


exports.getProducts = (req, res) => {
    // const { productsName, productsType } = req.query;
    Products.getProducts( req, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found products with name ${req.params.productsName}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving products with name " + req.params.productsName
            });
          }
        } else res.send(data);
      });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    Products.updateById(
      req.params.id,
      new Products(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found product with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating product with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
};

exports.delete = (req, res) => {
  Products.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found product with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete product with id " + req.params.id
            });
          }
        } else res.send({ message: `product was deleted successfully!` });
      });
};
