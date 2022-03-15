/** @format */

import React from "react";
import { Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import '../../style/form.scss'
const ChangePassword = () => {
  return (
        <Form name="basic" initialValues={{ remember: true }}>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password",
                  },
                ]}
              >
                <Input.Password className='form__group--input' placeholder='Input current password' />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password",
                  },
                ]}
              >
                <Input.Password className='form__group--input' placeholder='Input new password' />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password",
                  },
                ]}
              >
                <Input.Password className='form__group--input' placeholder='Confirm password' />
              </Form.Item>
              <Form.Item  className="form__btn--center">
                <Button type="primary" htmlType="submit" className="form__btn">
                  SAVE CHANGE PASSWORD
                </Button>
              </Form.Item>
        </Form>
  );
};

export default ChangePassword;
