/** @format */

import React from "react";
import { Row, Col, Form, Button, Radio, Input, Space, message } from "antd";
import validateMessages from "../form/ValidateMessage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "../../style/checkout.scss";
import "../../style/form.scss";
import "../../style/aboutus.scss";
import {
  getListProductApi,
  clearItemCart,
} from "../../redux/reducers/productSlice";
import { addOrderApi } from "../../redux/reducers/orderSlice";
import { useHistory } from "react-router";
const Checkout = () => {
  const history = useHistory()
  const list = JSON.parse(localStorage.getItem("inforUser"));

  const [form] = Form.useForm();
  const [formVl, setFormVl] = React.useState({
    fullName: "",
    mail: "",
    phone: "",
    address: "",
    note: "",
  });
  const [isShow, setIsShow] = React.useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProductApi());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setFormVl(list);
  }, [list]);
  const { cart } = useSelector((state) => state.listProduct);

  const onChange = (e) => {
    if (e.target.value === 2) {
      setIsShow(false);
    }
    if (e.target.value === 1) {
      setIsShow(true);
    }
  };

  const handleSbm = (listId) => {
    let total = 10; //10 ship
    const cartApi = cart.map((vl) => {
      total = total + vl.total;

      return {
        product_id: vl.id,
        quantity: vl.count,
      };
    });
    const request = {
      cart: cartApi,
      total,
      listId,
    };
    dispatch(addOrderApi(request));
    dispatch(clearItemCart(-1));
    history.push('/my-account')
  };

  const getTotal = (ship) => {
    let total = ship || 0;
    cart.forEach((element) => {
      return (total += element.total);
    });
    return total.toFixed(2);
  };
  return (
    <>
      <div className="aboutUs__header">
        <h1 className="aboutUs__header-h1">Shop</h1>
        <h3 className="aboutUs__header-h3">Checkout</h3>
      </div>
      <div className="container">
        <Row gutter={20} className="checkout">
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <h2 className="checkout--borderbot">Billing Details</h2>
            <div className="checkout__info">
              <Form
                Form={form}
                name="basic"
                initialValues={{
                  remember: true,
                  fullName: list.fullName,
                  phone: list.phone,
                  email: list.mail,
                  address: list.address,
                }}
                validateMessages={validateMessages}
              >
                <Form.Item
                  label="Full name"
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Full Name",
                    },
                  ]}
                >
                  <Input
                    name="fullname"
                    className="form__group--input form__group--backgroundColor"
                    placeholder="Full Name"
                  />
                </Form.Item>
                <Form.Item
                  label="Email Address"
                  name={"email"}
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input
                    name={"email"}
                    className="form__group--input form__group--backgroundColor"
                    placeholder="Enter your Email"
                  />
                </Form.Item>
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[{ required: true, type: "phone" }]}
                >
                  <Input
                    name="phone"
                    className="form__group--input form__group--backgroundColor"
                    placeholder="Enter your phone"
                  />
                </Form.Item>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    name="address"
                    className="form__group--input form__group--backgroundColor"
                    placeholder="Address"
                  />
                </Form.Item>
                <Form.Item
                  label="Note"
                  name="note"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Full Name",
                    },
                  ]}
                >
                  <Input.TextArea
                    name="note"
                    className="form__group--input form__group--backgroundColor"
                    placeholder="Note"
                  />
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <h2 className="checkout--borderbot">Your Order Summary</h2>
            <div className="checkout__order">
              <table>
                <tr>
                  <td>Sub Total</td>
                  <td>${getTotal()}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$10.00</td>
                </tr>

                <tr>
                  <th>Total Amount</th>
                  <th>${getTotal(10)}</th>
                </tr>
              </table>
              <div className="checkout__order--padding">
                <Radio.Group
                  onChange={onChange}
                  className="checkout__order--radio"
                  defaultValue={1}
                >
                  <Space direction="vertical">
                    <Radio value={1}>Payment on delivery</Radio>
                    <Radio value={2}>Momo</Radio>
                    <ul style={{ display: `${isShow ? "none" : "block"}` }}>
                      <img
                        style={{ width: "40%" }}
                        src="Images/payment/payment.jpg"
                      />
                    </ul>
                  </Space>
                </Radio.Group>
                <br />
                <div className="checkout__order--center checkout__order--padding">
                  <Form.Item>
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      className='form__btn'
                      onClick={async()=>{handleSbm(list.id)}}>
                      PLACE ORDER
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Checkout;
