/** @format */

import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Alert, Button, Modal } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteItemCart,
  editCartItem,
  getListProductApi,
} from "../../redux/reducers/productSlice";

library.add(faTrash);
const TableRow = (props) => {
  // Tên biến
  const { id, name, price, img, stock, count } = props;

  const [count1, setCount] = React.useState(count);
  const [check, setCheck] = React.useState(true);
  const [checkStock, setCheckStock] = React.useState(true);
  const dispatch = useDispatch();
  // Style cho Button Count
  const countStyle = {
    minWidth: "3.7rem",
    textAlign: "center",
    transform: "translateY(-.4rem)",
    padding: "0 1rem",
  };
  const btnStyle = {
    border: "none",
  };
  const borderStyle = {
    border: "1px solid #e5e5e5",
    margin: "0 1rem",
    padding: ".5rem 0",
    maxWidth: "10rem",
    display: "flex",
    justifyContent: "space-between",
    maxHeight: "3.4rem",
  };
  // Function cho Button Count
  const Plus = () => {
    if (count1 === 1) {
      setCheck(true);
    }
    setCount(count1 + 1);
    if (count1 === stock - 1) {
      error();
    } else {
      dispatch(editCartItem({ ...props, count: count1 + 1 }));
    }
  };
  const Minus = () => {
    if (count === 1) {
      setCheck(!check);
    }
    if (count > 1) {
      setCheck(true);
      setCount(count1 - 1);
      setCheckStock(true);
      dispatch(editCartItem({ ...props, count: count1 - 1 }));
    }
  };
  // Func Đơn Giản
  const deletePD = () => {
    const isCancel = window.confirm("Are you sure to delete this product");
    if (isCancel) {
      dispatch(deleteItemCart(id));
    }
  };
  //  Modal
  function confirm() {
    Modal.confirm({
      title: "Confirm",
    });
  }
  function error() {
    Modal.error({
      title: "Sorry! Stock Out",
      content: "We will refill soon",
    });
  }
  return (
    <tr className="cart__table-tr">
      <td className="cart__table-tr--td ">
        <img className="cart__table-tr--td--img" src={img} alt="img" />
      </td>
      <td className="cart__table-tr--td">{name}</td>
      <td className="cart__table-tr--td">{price}</td>
      <td className="cart__table-tr--td">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={borderStyle}>
            {check ? (
              <Button onClick={Minus} size="small" style={btnStyle}>
                <MinusOutlined />
              </Button>
            ) : (
              <Button onClick={Minus} disabled size="small" style={btnStyle}>
                <MinusOutlined />
              </Button>
            )}

            <p style={countStyle}>{count1}</p>
            {count1 < stock ? (
              <Button onClick={Plus} size="small" style={btnStyle}>
                <PlusOutlined />
              </Button>
            ) : (
              <Button onClick={Plus} size="small" disabled style={btnStyle}>
                <PlusOutlined />
              </Button>
            )}
          </div>
        </div>
      </td>
      <td className="cart__table-tr--td">{price * count}</td>
      <td className="cart__table-tr--td">
        <FontAwesomeIcon
          icon="trash"
          className="cart__table-tr--td--icon"
          onClick={deletePD}
        />
      </td>
    </tr>
  );
};
export default TableRow;
