/** @format */

import React from "react";
import { Row, Col } from "antd";
import { Form, Input, Button, message } from "antd";
import "../../../style/form.scss";
import "../../../style/base.scss";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { ROUTE } from "../../../constant/router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setInfoCustomer } from "../../../redux/reducers/customerSlice";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const handelOnChange = (e) => {
    if (e.target) {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
      console.log(e.target.value);
    } else {
      setFormValue({ ...formValue });
    }
  };
  const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      username: `${formValue.username}`,
      password: `${formValue.password}`,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/customer/authenticate", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw Error(response.status);
      })
      .then((result) => {
        localStorage.setItem("inforUser", result);
        let results = JSON.parse(result);
        dispatch(setInfoCustomer(results));
        localStorage.setItem("accessToken", results.token);
        message.success('Login Success', 3);
        if (results.role === "2") {
          history.push("/");
        }
        if (results.role === "1") {
          history.push("/admin/dashboard");
        }
      })
      .catch((error) => {
        console.log("error", error);
        message.error('Login Fail!', 2);
      });
  };
  return (
    <div className="form container">
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="form__group">
            <h1>Sign In</h1>
            <Form form={form} name="basic" initialValues={{ remember: true }}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username",
                  },
                ]}
              >
                <Input
                  className="form__group--input"
                  name="username"
                  placeholder="Enter Username"
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.username}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  name="password"
                  className="form__group--input"
                  placeholder="Enter your Password"
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.password}
                />
              </Form.Item>
              <div className="form__group--subform">
                <Form.Item name="remember" valuePropName="checked">
                  <NavLink to={ROUTE.REGISTER}>Register</NavLink>
                </Form.Item>
                <Form.Item>
                  <a>Forgot password?</a>
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="form__btn"
                  onClick={login}
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <img
            style={{ width: "100%", height: "76%" }}
            src="Images/banner/best-sellers.png"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
