/** @format */

import React from "react";
import QuickView from "./QuickView";
import { Row, Col, Popover, Modal, Space } from "antd";
import { Rate } from "antd";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBag,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useHistory } from "react-router-dom";
import { ROUTE } from "../../constant/router";
import { useDispatch } from "react-redux";
import {
  getListProductApi,
  addToCart,
  addToWishlist,
  addToDetail,
} from "../../redux/reducers/productSlice";
library.add(faShoppingBag, faHeart, faStar);

const ProductItem = (props) => {
  // Tên Biến
  const token = localStorage.getItem("accessToken");
  const { id, name, img, price, stock, description, rating, count } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  // Các Function đơn giản
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
    <>
      <Col lg={{ span: 8 }} xs={{ span: 12 }}>
        <div style={{ padding: "2.4rem .8rem " }}>
          <div className="product__list-item">
            <div className="product__list-item--img">
              <img style={{ width: "100%" }} src={props.img} alt="" />
            </div>
            <div className="product__list-item--rating">
              <span>
                <Rate allowHalf value={rating} />
              </span>
            </div>
            <NavLink className="product__list-item--h3" to={ROUTE.SHOPDETAIL}>
              <div>
                {stock === 0 ? (
                  <>
                    {props.name}
                    <p className="stockout "> Stock Out</p>
                  </>
                ) : (
                  <>{props.name}</>
                )}
              </div>
            </NavLink>
            <div className="product__list-item--price">
              <p className="product__list-item--price--p">${props.price}.00 </p>
              <p className="product__list-item--price--p discounted">
                {props.sell}
              </p>
            </div>

            <div className="product__list-item--icon">
              <Popover content="Add to cart" onClick={handleAddCart}>
                <div className="product__list-item--icon-1">
                  <FontAwesomeIcon
                    className="product__list-item--icon--1"
                    icon="shopping-bag"
                  />
                </div>
              </Popover>
              <Popover content=" Wishlist" onClick={handleAddWishlist}>
                <div className="product__list-item--icon-2">
                  <FontAwesomeIcon
                    className="product__list-item--icon--1"
                    icon="heart"
                  />
                </div>
              </Popover>
            </div>
            <Link className="quickview__eye" to={`${ROUTE.SHOPITEM}/${id}`}>
              <QuickView />
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
};
export default ProductItem;
