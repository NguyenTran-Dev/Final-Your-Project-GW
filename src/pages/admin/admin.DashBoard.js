/** @format */

import React from "react";
import "./admin.DashBoard.scss";
import { useDispatch, useSelector } from "react-redux";
import { Input, Avatar, Row, Col, } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarCircleOutlined,
  LoadingOutlined,
  CarOutlined,
  PayCircleOutlined,
  TransactionOutlined,
  FileDoneOutlined
} from "@ant-design/icons";
import { getListCustomerApi } from "../../redux/reducers/customerSlice";
import { getOrderApi } from "../../redux/reducers/orderSlice";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { listCustomerApi } = useSelector((state) => state.listCustomer);
  const { listOrderApi } = useSelector((state) => state.listOrder);
 
  React.useEffect(() => {
    dispatch(getListCustomerApi());
    dispatch(getOrderApi());
  }, []);

  const lengthCustomer = listCustomerApi.length;
  const lengthOrder = listOrderApi.length;

  const renderTotal = (status) => {
    let total = 0;
    listOrderApi.forEach((item) => {
      if(item.status === status){
        return total += +item.total;
      }
      
    });
    return <h1>$ {total.toFixed(2)}</h1>;
  };
  const renderTotalAll = () => {
    let total = 0;
    listOrderApi.forEach((item) => {
       total += +item.total;
    });
    return <h1>$ {total.toFixed(2)}</h1>;
  };
  const renderOrderStatus = (status) => {
   const listItem = listOrderApi.filter((item) => {
      if(item.status === status){
        return item.status;
      }
    });
    const lengthOrder = listItem.length
    return <h1>{lengthOrder}</h1>;
  };
  
  return (
    <>
      <div className="dashBoard">
        <Row gutter={[24, 24]}>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <UserOutlined className="dashBoard__icon" />
            </div>
            <div>
              <NavLink to={'/admin/customer'}>
              <h2>Total Customer</h2>
              <h1>{lengthCustomer} Users</h1>
              </NavLink>
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <ShoppingCartOutlined className="dashBoard__icon" />
            </div>
            <div>
            <NavLink to={'/admin/orders'}>
              <h2>Total Order</h2>
              <h1>{lengthOrder} Orders</h1>
            </NavLink>
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <DollarCircleOutlined className="dashBoard__icon" />
            </div>
            <div>
              <h2>Total Sales</h2>
              {renderTotalAll()}
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <LoadingOutlined className="dashBoard__icon" />
            </div>
            <div>
              <h2>Total Pending</h2>
              <h3>{renderTotal("Pending")}</h3>
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <TransactionOutlined className="dashBoard__icon" />
            </div>
            <div>
              <h2>Total Delivery</h2>
              <h3>{renderTotal("Delivery")}</h3>
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <PayCircleOutlined  className="dashBoard__icon" />
            </div>
            <div>
            <h2>Total Done</h2>
              <h3>{renderTotal("Done")}</h3>
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <LoadingOutlined className="dashBoard__icon" />
            </div>
            <div>
            <h2>Order Pending</h2>
              <h3>{renderOrderStatus("Pending")}</h3>
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <CarOutlined className="dashBoard__icon" />
            </div>
            <div>
              <h2>Order Delivery</h2>
              <h3>{renderOrderStatus("Delivery")}</h3>
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <FileDoneOutlined   className="dashBoard__icon" />
            </div>
            <div>
            <h2>Order Done</h2>
              <h3>{renderOrderStatus("Done")}</h3>
            </div>
          </Col>
        </Row>
      </div>
     
    </>
  );
};

export default Dashboard;
