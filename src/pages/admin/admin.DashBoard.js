/** @format */

import React from "react";
import "./admin.DashBoard.scss";
import { useDispatch, useSelector } from "react-redux";
import {Row, Col,Progress } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarCircleOutlined,
 
} from "@ant-design/icons";
import { getListCustomerApi } from "../../redux/reducers/customerSlice";
import { getOrderApi } from "../../redux/reducers/orderSlice";
import { NavLink } from "react-router-dom";
import moment from "moment";

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
  let total = 0;
  const renderTotalAll = () => {
    listOrderApi.forEach((item) => {
       total += +item.total;
    });
    return <h1>$ {total.toFixed(2)}</h1>;
  };

  const renderListOrder = () => {
    return listOrderApi
      .map((item) => {
        const userId = item.customer_id;
        const listUser = listCustomerApi.filter((item) => {
          return item.id === userId;
        });
        const user = listUser.map((item) => {
          return (
            <>
              <td>{item.fullName}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
            </>
          );
        });
        return (
              <tr>
                <td>{item.id}</td>
                {user}
                <td><span style={{color: item.status === 'Done' ? "#62d2a2" : "red"}}>{item.status}</span></td>
                <td>{moment(item.date).format("DD-MM-YYYY")}</td>
                <td>{item.total}</td>
              </tr>
            )})
  };

  return (
    <>
      <div className="dashBoard">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row " span={8}>
            <div className='dashBoard__group'>
            <div>
              <UserOutlined className="dashBoard__icon" />
            </div>
            <div>
              <NavLink to={'/admin/customer'}>
              <h2>Total Customer</h2>
              <h1>{lengthCustomer} Users</h1>
              </NavLink>
            </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className='dashBoard__group'>
              <div>
                <ShoppingCartOutlined className="dashBoard__icon" />
              </div>
              <div>
                <NavLink to={'/admin/orders'}>
                  <h2>Total Order</h2>
                  <h1>{lengthOrder} Orders</h1>
                </NavLink>
              </div>
            </div>
          </Col>
          <Col className="gutter-row " span={8}>
            <div className='dashBoard__group'>
            <div>
              <DollarCircleOutlined className="dashBoard__icon" />
            </div>
            <div>
              <h2>Total Sales</h2>
              {renderTotalAll()}
            </div>
            </div>
          </Col>
        </Row>
        <div className='content'>
        <div className='dashBoard__analysis'>
          <h2>Analysis</h2>
          <div className='dashBoard__analysis--statistical'>
            <Progress type="circle" percent={lengthCustomer} />
            <Progress type="circle" percent={lengthOrder}/>
            <Progress type="circle" percent={total/100} />
          </div>
        </div>
        <div className='dashBoard__order'>
          <h2> List Orders</h2>
          <table>
          <tr>
            <th className="id">ID</th>
            <th className="fullName">Full Name</th>
            <th className="phone">Phone</th>
            <th className="address">Address</th>
            <th className="status">Status</th>
            <th className="date">Date</th>
            <th className="total">Total ($)</th>
          </tr>
          {renderListOrder()}
        </table>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
