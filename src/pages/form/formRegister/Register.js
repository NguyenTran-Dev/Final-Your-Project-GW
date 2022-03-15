/** @format */

import React, { useState } from "react";
import { Row, Col, Alert } from "antd";
import { Form, Input, Button, Checkbox,message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerApi } from "../../../redux/reducers/customerSlice";
import validateMessages from "../ValidateMessage";
import "../../../style/form.scss";
import { useHistory } from "react-router";

const Register = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState({
    gender:"",
    fullName:"",
    username: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (formValue.password === formValue.confirmPassword) {
      message.success('Register Success', 3);
      history.push("/login")
      return dispatch(addCustomerApi({ ...formValue }));
    }
    
  };
  const handelOnChange = (e) => {
    if (e.target) {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    } else {
      setFormValue({ ...formValue });
    }
  };
  return (
    <div className='container'>
      <Row gutter={[16]}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className='form__group'>
            <h1>Sign Up</h1>
            <Form
              form={form}
              name='basic'
              initialValues={{ remember: true }}
              validateMessages={validateMessages}>
                <Form.Item
                name='fullName'
                rules={[
                  {
                    required: true,
                    message: "Please input your Full Name",
                  },
                ]}>
                <Input
                  className='form__group--input'
                  placeholder='Enter Full Name'
                  name='fullName'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.fullName}
                />
              </Form.Item>
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: "Please input your Username",
                  },
                ]}>
                <Input
                  className='form__group--input'
                  placeholder='Enter Username'
                  name='username'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.username}
                />
              </Form.Item>
              <Form.Item
                name='email'
                rules={[{ required: true, type: "email" }]}>
                <Input
                  className='form__group--input'
                  placeholder='Enter your Email'
                  name='email'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.email}
                />
              </Form.Item>
              <Form.Item
                name='phone'
                rules={[{ required: true}]}>
                <Input
                  className='form__group--input'
                  placeholder='Enter your Phone'
                  name='phone'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.phone}
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}>
                <Input.Password
                  className='form__group--input'
                  placeholder='Enter your Password'
                  name='password'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.password}
                />
              </Form.Item>
              <Form.Item
                name='confirmPassword'
                rules={[
                  { required: true, message: "Please Repeat your password!" },
                ]}>
                <Input.Password
                  className='form__group--input'
                  placeholder='Repeat your Password'
                  name='confirmPassword'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.confirmPassword}
                />
              </Form.Item>
              <Form.Item
                name='address'
                rules={[{ required: true}]}>
                <Input
                  className='form__group--input'
                  placeholder='Enter your Address'
                  name='address'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.address}
                />
              </Form.Item>
              
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='form__btn'
                  onClick={handleRegister}>
                  REGISTER
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <img
            style={{ width: "100%", height: "91%" }}
            src='Images/banner/best-sellers.png'
          />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
