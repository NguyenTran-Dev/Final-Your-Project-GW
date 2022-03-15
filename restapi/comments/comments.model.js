const sql = require('../db_connection');

const Comment = function(comments) {
    this.rating = comments.rating;
    this.content = comments.content;
    this.date = new Date();
    this.product_id = comments.product_id;
    this.customer_id = comments.customer_id;
  };
  Comment.create = (newComment, result) => {
    sql.query("INSERT INTO comments SET ?", newComment, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created comments: ", { id: res.insertId, ...newComment });
      result(null, { id: res.insertId, ...newComment });
    });
  };
  
  Comment.findById = (product_id, result) => {
    sql.query(`SELECT * FROM comments WHERE product_id = ${product_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found comment: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found comment with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Comment.getAll = result => {
    sql.query("SELECT * FROM comments", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("comments: ", res);
      result(null, res);
    });
  };
  
  Comment.updateById = (id, comment, result) => {
    sql.query(
      "UPDATE comments SET rating = ?, content = ?, date = ? WHERE id = ?",
      [comment.rating, comment.content, comment.date, id],
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
  
        console.log("updated comment: ", { id: id, ...comment });
        result(null, { id: id, ...comment });
      }
    );
  };
  
  Comment.remove = (id, result) => {
    sql.query("DELETE FROM comments WHERE id = ?", id, (err, res) => {
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
  
      console.log("deleted comment with id: ", id);
      result(null, res);
    });
  };
  
  module.exports = Comment;