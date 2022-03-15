/** @format */

import React from "react";
import { Row, Col, Tabs, Avatar } from "antd";
import {
  UserOutlined,
  
 
} from "@ant-design/icons";

import "../../style/aboutus.scss";
import "../../style/account.scss";
import AccountUser from "./UserForm";
import WishListTable from "../shop/wishlist/WishList.Table";
import CartTable from "../shop/Cart/Cart.CartTable";
import ChangePassword from "./ChangePassword";
import { useMediaQuery } from "react-responsive";
import { useSelector,useDispatch } from "react-redux";
import HistoryOrder from "./HistoryOrder";

const Account = (props) => {
  const list = JSON.parse(localStorage.getItem('inforUser'));

  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  
  const { TabPane } = Tabs;
  return (
    <>
      <div className="aboutUs__header">
        <h1 className="aboutUs__header-h1">Shop</h1>
        <h3 className="aboutUs__header-h3">My Acount</h3>
      </div>
      <div className="container">
        <Row className="myaccount">
          <Col lg={{ span: 24 }} className="myaccount__nav">
            <div className="myaccount__nav__top myaccount__nav--flex">
              <div >
              <Avatar size={50} icon={<UserOutlined />} />
              </div>
              <div className="myaccount__nav--name">
                <h4>Account</h4>
                <h3>{list.fullName}</h3>
              </div>
            </div>
            <div className="myaccount__nav__bot">
              <Tabs defaultActiveKey='2' tabPosition={isMoblie ? "top" : "left"}>
                <TabPane tab="ACCOUNT DETAILS" key="1">
                  <h2 className="myaccount__title">ACCOUNT DETAILS</h2>
                  <AccountUser />
                </TabPane>
                <TabPane tab="ORDERS" key="2">
                  <h2 className="myaccount__title">ORDERS</h2>
                  <HistoryOrder/>
                </TabPane>
                <TabPane tab="WISHLIST" key="3">
                  <h2 className="myaccount__title">WISHLIST</h2>
                  <WishListTable />
                </TabPane>
                <TabPane tab="CHANGE PASSWORD" key="4">
                  <h2 className="myaccount__title">CHANGE PASSWORD</h2>
                  <ChangePassword />
                </TabPane>
              </Tabs>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Account;
