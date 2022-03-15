/** @format */

import React from "react";
import SubMenu from "./Header.subMenu.js";
import HeaderCart from "./Header.Cart.js";
import { useMediaQuery } from "react-responsive";
import { Input, Menu, Dropdown, Button, Row, Col, Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { ROUTE } from "../../constant/router.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import $ from "jquery";
import "antd/dist/antd.css";
import "../../style/style.scss";
import "../../style/base.scss";
import "../../responsive/responsive.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListProductApi,
  searchItem,
  setSortItem,
} from "../../redux/reducers/productSlice";
library.add(faShoppingCart, faTrash);

const Header = () => {
  // Tên Biến
  const token = localStorage.getItem("accessToken");
  const [isLogin, setIsLogin] = React.useState(token);
  const [valueSearch, setValueSearch] = React.useState();
  const list = JSON.parse(localStorage.getItem("inforUser"));
  const history = useHistory();
  const { Search } = Input;
  const dispatch = useDispatch();
  // Get listProductApi
  useEffect(() => {
    dispatch(getListProductApi());
  }, []);
  // user Media Query
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 73 && isMoblie === true) {
      $(".header__top-right").addClass("fixed");
      $(".header__submenu").addClass("menufixed");
    } else {
      $(".header__top-right").removeClass("fixed");
      $(".header__submenu").removeClass("menufixed");
    }
  });
  //  Function đơn giản
  function goHome() {
    history.push("/");
  }
  const handleSearch = () => {
    history.push("/shop-product");
    return dispatch(searchItem(valueSearch));
  };
  const handleLogout = () => {
    history.push("/login");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("inforUser");
  };

  // Render cart ra component
  const { cart } = useSelector((state) => state.listProduct);
  const totalProduct = cart.length;
  const renderDataCart = () => {
    return cart.map((item, index) => {
      return <HeaderCart key={index} {...item} />;
    });
  };

  // Render ListProduct vào Thanh Search
  const { listProductApi } = useSelector((state) => state.listProduct);
  const renderResult = () => {
    return listProductApi
      .filter((item) => {
        if (item.name.toLowerCase().includes(valueSearch)) {
          return item;
        }
        if (item.name.toUpperCase().includes(valueSearch)) {
          return item;
        }
      })
      .map((item) => {
        return <p>{item.name}</p>;
      });
  };

  // SubMenu
  const accountMenu = (
    <Menu className="header__top-account-sub">
      {isLogin ? (
        <>
          <Menu.Item>
            <NavLink to={ROUTE.MYACCOUNT} exact>
              My Account
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <li onClick={handleLogout}>Log out</li>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item>
            <NavLink to={ROUTE.LOGIN} exact>
              Login
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={ROUTE.REGISTER} exact>
              Register
            </NavLink>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
  const cartMenu = (
    <Menu className="header__top-cart-sub">
      {totalProduct ? (
        <>
          <Menu.Item>
            <div className="header__top-cart-cover">{renderDataCart()}</div>
          </Menu.Item>
          <NavLink to={ROUTE.CART} exact>
            <Menu.Item>
              <Button id="header__top-container-btn" type="primary">
                View Cart
              </Button>
            </Menu.Item>
          </NavLink>
          <NavLink to={ROUTE.CHECKOUT} exact>
            <Menu.Item>
              <Button id="header__top-container-btn" type="primary">
                Check Out
              </Button>
            </Menu.Item>
          </NavLink>
        </>
      ) : (
        <Menu.Item>
          <div className="header__top-cart-emty">
            <img src="Images/about/no-cart.png" />
            <p>Your cart is emty</p>
          </div>
        </Menu.Item>
      )}
    </Menu>
  );
  const shoplist = (
    <Menu className="header__top-submenu">
      <NavLink to={ROUTE.SHOPITEM} exact>
        <Menu.Item>
          <a className="header__top-submenu--a">Shop Product</a>
        </Menu.Item>
      </NavLink>
      <NavLink to={ROUTE.WISHLIST} exact>
        <Menu.Item>
          <a className="header__top-submenu--a">Wishlist</a>
        </Menu.Item>
      </NavLink>

      <NavLink to={ROUTE.CART} exact>
        <Menu.Item>
          <a className="header__top-submenu--a">Cart</a>
        </Menu.Item>
      </NavLink>
    </Menu>
  );

  // Chỗ returm
  // Chỗ returm
  // Chỗ return
  return (
    <div style={{ paddingTop: isMoblie ? "0" : "12rem" }}>
      <div className="header">
        <div className="container">
          <Row className="header__top">
            <Col lg={{ span: 8 }} xs={{ span: 24 }} className="header__top-img">
              <img
                src="Images/logo/logo.png"
                alt="Logo image"
                onClick={goHome}
              />
            </Col>

            <Col lg={{ span: 16 }} xs={{ span: 24 }}>
              <Row className="header__top-right">
                <Col
                  className="header__top-account"
                  lg={{ span: 8 }}
                  md={{ span: 12 }}
                  xs={{ span: 12 }}
                >
                  <Dropdown overlay={accountMenu}>
                    <a className="header__top-account-a">
                      <Avatar
                        style={{ margin: "1rem" }}
                        size="small"
                        icon={<UserOutlined />}
                      />
                      {list?.fullName ? (
                        <>
                          {list?.fullName} <DownOutlined />
                        </>
                      ) : (
                        <>
                          My Account <DownOutlined />
                        </>
                      )}
                    </a>
                  </Dropdown>
                </Col>
                <Col
                  className="header__top-search"
                  lg={{ span: 12 }}
                  md={{ span: 24 }}
                  xs={{ span: 24 }}
                >
                  <Search
                    id="header__top-search-input"
                    placeholder="search here"
                    onChange={(e) => setValueSearch(e.target.value)}
                    value={valueSearch}
                    onSearch={() => {
                      handleSearch();
                    }}
                  />
                  <div className="result">{renderResult()}</div>
                </Col>
                <Col
                  lg={{ span: 4 }}
                  md={{ span: 12 }}
                  className="header__top-cart"
                  xs={{ span: 12 }}
                >
                  <Dropdown overlay={cartMenu}>
                    {isMoblie ? (
                      <div className="submenu">
                        <FontAwesomeIcon
                          className="submenu__cart"
                          icon="shopping-cart"
                        />
                        <span>My cart</span>
                        <div
                          className="header-noti"
                          style={{
                            display: `${totalProduct ? "flex" : "none"} `,
                          }}
                        >
                          <span>{totalProduct}</span>
                        </div>
                      </div>
                    ) : (
                      <a>
                        <FontAwesomeIcon
                          className="header__top-cart-icon"
                          icon="shopping-cart"
                        />
                        <div
                          className="header-noti"
                          style={{
                            display: `${totalProduct ? "flex" : "none"} `,
                          }}
                        >
                          <span>{totalProduct}</span>
                        </div>
                      </a>
                    )}
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      {/* Header Menu */}

      <div className="container">
        {isMoblie ? (
          <Row className="header__submenu">
            <Col xs={{ span: 24 }}>
              <SubMenu />
            </Col>
          </Row>
        ) : (
          <div className="header__top-menu">
            <nav>
              <ul className="header__top-menu-ul">
                <li className="header__top-menu-li">
                  <a className="header__top-menu-a" href="" onClick={goHome}>
                    HOME
                  </a>
                </li>
                <li className="header__top-menu-li">
                  <div>
                    <Dropdown overlay={shoplist}>
                      <a className="header__top-menu-a  boder-none">
                        SHOP <DownOutlined />
                      </a>
                    </Dropdown>
                  </div>
                </li>
                <li className="header__top-menu-li">
                  <NavLink to={ROUTE.ABOUTUS} exact>
                    <a className="header__top-menu-a" href="">
                      ABOUT US
                    </a>
                  </NavLink>
                </li>
                <li className="header__top-menu-li">
                  <NavLink
                    className="header__top-menu-a"
                    to={ROUTE.CONTACT}
                    exact
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
