/** @format */

import React from "react";
import ViewProduct from "./ViewProduct";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Rate, Button, Modal } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { Link, NavLink, useHistory } from "react-router-dom";
import { ROUTE } from "../../../constant/router";
import { addToCart, addToWishlist } from "../../../redux/reducers/productSlice";
import "./productList.scss";
import { useDispatch } from "react-redux";

const ProductList = (props) => {
  const token = localStorage.getItem("accessToken");
  const { id, name, img, price, stock, description, rating, count } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAddCart = () => {
    if (stock === 0) {
      warning();
    } else {
      if (token) {
        dispatch(
          addToCart({ id, img, name, price, stock, total: price, count })
        );
        cartModal();
      } else {
        history.push("/login");
      }
    }
  };
  const handleAddWishlist = () => {
    dispatch(addToWishlist({ id, img, name, price, stock }));
    wlModal();
  };
  //  Modal
  function cartModal() {
    let secondsToGo = 1;
    const modal = Modal.success({
      title: "Add to cart susccess",
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }
  function wlModal() {
    let secondsToGo = 1;
    const modal = Modal.success({
      title: "Add to wishlist susccess",
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }
  // Modal warning
  function warning() {
    Modal.error({
      title: "Sorry! Stock Out",
      content: "We will refill soon",
    });
  }
  return (
    <div className="product-list">
      <Row>
        <Col lg={{ span: 6 }} xs={{ span: 24 }} className="img">
          <img src={img} />
          <Link className="viewproduct__eye" to={`${ROUTE.SHOPITEM}/${id}`}>
            <ViewProduct />
          </Link>
        </Col>
        <Col lg={{ span: 18 }} xs={{ span: 24 }}>
          <div className="content">
            <Rate value={rating} />
            <div>
              {stock === 0 ? (
                <>
                  <h2>{props.name}</h2>
                  <p className="stockout "> Stock Out</p>
                </>
              ) : (
                <h2>{props.name}</h2>
              )}
            </div>
            <h3>$ {price}.00</h3>
            <p>{description}</p>
            <Button size="large" className="add" onClick={handleAddCart}>
              ADD TO CART
            </Button>

            <Button className="icon" size="large" onClick={handleAddWishlist}>
              <HeartOutlined />
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductList;
