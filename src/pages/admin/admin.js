/** @format */

import React from "react";
import AdminRow from "./admin.Customer.js";
import { Input, Avatar, Row, Col, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  BellOutlined,
  LayoutOutlined,
  AppstoreOutlined,
  DownOutlined,
  MenuOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  AppstoreAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { setCurrentPage } from "../../redux/reducers/productSlice";

import { ROUTE } from "../../constant/router.js";
import { useHistory } from "react-router-dom";
import ScrollToTop from "../../component/commont/ScrollToTop";
import { useMediaQuery } from "react-responsive";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./admin.scss";
import Dashboard from "./admin.DashBoard.js";
import ProductRow from "./ProductRow.js";
import Order from "./admin.Order.js";
import AddProduct from "./admin.AddProduct.js";
import { useDispatch } from "react-redux";


  

const Admin = () => {
  const name = JSON.parse(localStorage.getItem("inforUser"));
  const dispatch = useDispatch()
  let { path, url } = useRouteMatch();
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const history = useHistory();
  const logOut = () => {
    const isSure = window.confirm("Are you sure to logout?");
    if (isSure) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("inforUser");
      history.push("/");
    }
  };
  const iconDrop = (
    <Menu className="sub-dropdown">
      <Menu.Item>
        <div className="cover">
          <p>Nothing Here</p>
        </div>
      </Menu.Item>
    </Menu>
  );
  const drop = (
    <Menu>
      <Menu.Item key="0">
        <p className="admin__text" onClick={logOut}>
          <span>
            <LogoutOutlined />{" "}
          </span>
          Log Out
        </p>
      </Menu.Item>
    </Menu>
  );

  const submenu = (
    <Menu className="admin-submenu" style={{ zIndex: "1000" }}>
      <Menu.Item>
        <ul className="admin-select">
          <li>
            <LayoutOutlined className="icon" />
            Layouts
          </li>
          <li>
            <AppstoreOutlined className="icon" />
            User interface
          </li>
          <li>
            <UserOutlined className="icon" />
            User
          </li>
          <li>
            <ShopOutlined className="icon" />
            Product
          </li>
          <li>
            <ShopOutlined className="icon" />
            Add Product
          </li>
        </ul>
      </Menu.Item>
      <Menu.Item></Menu.Item>
      <Menu.Item></Menu.Item>
    </Menu>
  );
  return (
    <div className="container">
      <div className="admin">
        <Row className="admin-header">
          <Col span={isMoblie ? 24 : 6}>
            <NavLink to={ROUTE.HOME} className="col-img" exact>
              <ScrollToTop />
              <img
                src={`http://localhost:3000/Images/logo/logo.png`}
                alt="Logo image"
              />
            </NavLink>
          </Col>
          <Col span={isMoblie ? 0 : 8}></Col>
          <Col span={isMoblie ? 24 : 8} className="col-icon">
            {isMoblie ? (
              <>
                <Dropdown overlay={drop} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Avatar size="medium" icon={<UserOutlined />} />

                    <span style={{ color: "#62d2a2", marginLeft: "10px" }}>
                      {name.fullName}{" "}
                    </span>
                  </a>
                </Dropdown>
                <Dropdown overlay={iconDrop} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <BellOutlined className="icon" />
                  </a>
                </Dropdown>
                <Dropdown overlay={iconDrop} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MessageOutlined className="icon" />
                  </a>
                </Dropdown>
              </>
            ) : (
              <>
                <Dropdown overlay={drop} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Avatar size="medium" icon={<UserOutlined />} />

                    <span style={{ color: "#62d2a2", marginLeft: "10px" }}>
                      {name.fullName}{" "}
                    </span>
                  </a>
                </Dropdown>
                <Dropdown overlay={iconDrop} trigger={["click"]}>
                  <BellOutlined className="icon" />
                </Dropdown>
                <Dropdown overlay={iconDrop} trigger={["click"]}>
                  <MessageOutlined className="icon" />
                </Dropdown>
              </>
            )}
          </Col>
        </Row>
        <Row className="admin-body">
          {isMoblie ? (
            <Col span={24}>
              <Dropdown
                overlay={submenu}
                className="admin-menu"
                placement="bottomCenter"
              >
                <p>
                  Menu
                  <DownOutlined
                    style={{ fontWeight: "500", fontSize: "1.4rem" }}
                  />
                </p>
              </Dropdown>
            </Col>
          ) : (
            <Col span={6}>
              <ul className="admin-select">
                <NavLink className="admin-text" to={`${url}${ROUTE.DASHBOARD}`}>
                  <li onClick={dispatch(setCurrentPage(1))}>
                    <LayoutOutlined className="icon" />
                    Dashboard
                  </li>
                </NavLink>

                <NavLink className="admin-text" to={`${url}${ROUTE.CUSTOMER}`}>
                  <li onClick={dispatch(setCurrentPage(1))}>
                    <UserOutlined className="icon" />
                    User
                  </li>
                </NavLink>

                <NavLink className="admin-text" to={`${url}${ROUTE.ORDERS}`}>
                  <li onClick={dispatch(setCurrentPage(1))}>
                    <ShoppingCartOutlined className="icon" />
                    Orders
                  </li>
                </NavLink>

                <NavLink className="admin-text" to={`${url}${ROUTE.PRODUCTS}`}>
                  <li onClick={dispatch(setCurrentPage(1))}>
                    <ShopOutlined className="icon" />
                    Products
                  </li>
                </NavLink>
                <NavLink
                  className="admin-text"
                  to={`${url}${ROUTE.ADDPRODUCT}`}
                >
                  <li>
                    <AppstoreAddOutlined className="icon" />
                    Add Products
                  </li>
                </NavLink>
              </ul>
            </Col>
          )}

          <Col span={isMoblie ? 24 : 18}>
            <div className="admin__content">
              <Switch>
                <Route path={`${path}${ROUTE.DASHBOARD}`}>
                  <Dashboard />
                </Route>
                <Route path={`${path}${ROUTE.CUSTOMER}`} exact>
                  <AdminRow />
                </Route>
                <Route path={`${path}${ROUTE.ORDERS}`} exact>
                  <Order />
                </Route>
                <Route path={`${path}${ROUTE.PRODUCTS}`} exact>
                  <ProductRow />
                </Route>
                <Route path={`${path}${ROUTE.ADDPRODUCT}`} exact>
                  <AddProduct />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Admin;
