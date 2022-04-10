/** @format */

import React, { useState } from 'react';
import { Row, Col, Alert } from 'antd';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerApi } from '../../../redux/reducers/customerSlice';
import validateMessages from '../ValidateMessage';
import '../../../style/form.scss';
import { useHistory } from 'react-router';

const Register = () => {
  const [form] = Form.useForm();

  const rgPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z][a-zA-Z0-9!@#$%^&*]{7,15}$/;
  const rgPhone = /^(^0)?(9|8|7)\d{8}$/;
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    if (values.password === values.confirmPassword) {
      message.success('Register Success', 3);
      dispatch(addCustomerApi({ ...values }));
      history.push('/login');
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
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete='off'
              validateMessages={validateMessages}>
              <Form.Item
                label="Full Name"
                name='fullName'
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Input
                  className='form__group--input'
                  placeholder='Enter full name'
                  name='fullName'
                  
                />
              </Form.Item>
              <Form.Item
                label="Username"
                name='username'
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Input
                  className='form__group--input'
                  placeholder='Enter username'
                  name='username'
                  
                />
              </Form.Item>
              <Form.Item
                label="Email"
                name='email'
                rules={[{ required: true, type: 'email' }]}>
                <Input
                  className='form__group--input'
                  placeholder='Enter email'
                  name='email'
                  
                />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name='phone'
                rules={[{ required: true },
                  { type: 'regexp' },
                  {
                    pattern: new RegExp(rgPhone),
                    mess: 'must have number, length 10 character! Ex: 0983222888',
                },
                {
                    string:'10'
                  }
              ]}>
                <Input
                  className='form__group--input'
                  placeholder='Enter phone number'
                  name='phone'
                  
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name='password'
                rules={[
                  { required: true},
                  { type: 'regexp' },
                  {
                    pattern: new RegExp(rgPass),
                    mess: 'include first uppercase letter, lowercase letter, number, special character',
                  },
                ]}>
                <Input.Password
                  className='form__group--input'
                  placeholder='Enter password'
                  name='password'
                />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name='confirmPassword'
                rules={[
                  { required: true},
                ]}
               >
                <Input.Password
                  className='form__group--input'
                  placeholder='Enter Confirm Password'
                  name='confirmPassword'
                  
                />
              </Form.Item>
              <Form.Item
                label="Address"
                name='address'
                rules={[
                  { required: true},
                ]}
              >
                <Input
                  className='form__group--input'
                  placeholder='Enter Address'
                  name='address'
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='form__btn'
                >
                  REGISTER
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <img
            style={{ width: '100%', height: '91%' }}
            src='Images/banner/best-sellers.png'
          />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
