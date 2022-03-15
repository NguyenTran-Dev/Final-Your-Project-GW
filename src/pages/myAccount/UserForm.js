/** @format */

import React, { useState } from 'react';
import { Form, Button, Radio, Input, Space, message } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import validateMessages from '../form/ValidateMessage';
import FormItem from 'antd/lib/form/FormItem';
import '../../style/form.scss';
import {
  getListCustomerApi,
  updateCustomerApi,
} from '../../redux/reducers/customerSlice';

const AccountUser = () => {
  const [form] = Form.useForm();
  const list = JSON.parse(localStorage.getItem('inforUser'));

  const dispatch = useDispatch();
  const [formValue, setFormValue] = React.useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    gender: '',
  });
  React.useEffect(() => {
    dispatch(getListCustomerApi());
  }, []);
  React.useEffect(() => {
    setFormValue(list);
  }, []);

  const handelOnChange = (e) => {
    if (e.target) {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
      console.log(e.target.value);
    } else {
      setFormValue({ ...formValue });
    }
  };

  const handleSave = (id) => {
    dispatch(updateCustomerApi({ ...formValue, id }));
  };
  return (
    <Form
      Form={form}
      name='basic'
      initialValues={{
        remember: true,
        fullName: list.fullName,
        phone: list.phone,
        email: list.mail,
        address: list.address,
      }}
      validateMessages={validateMessages}>
      <Form.Item
        label='Full name'
        name='fullName'
        rules={[
          {
            required: true,
            message: 'Please input your Full Name',
          },
        ]}>
        <Input
          onChange={(e) => handelOnChange(e)}
          value={formValue.userName}
          name='fullName'
          className='form__group--input form__group--backgroundColor'
        />
      </Form.Item>
      <Form.Item
        label='Phone'
        type='number'
        name='phone'
        rules={[
          {
            required: true,
            message: 'Please input your PhoneNumber',
          },
        ]}>
        <Input
          onChange={(e) => handelOnChange(e)}
          value={formValue.phone}
          name='phone'
          className='form__group--input form__group--backgroundColor'
          placeholder='PhoneNumber'
        />
      </Form.Item>
      <Form.Item
        label='Email Address'
        name={'email'}
        rules={[{ required: true, type: 'email' }]}>
        <Input
          onChange={(e) => handelOnChange(e)}
          value={formValue.email}
          name='email'
          className='form__group--input form__group--backgroundColor'
          placeholder='Enter your Email'
        />
      </Form.Item>
      <Form.Item
        label='Street Address'
        name='address'
        rules={[
          {
            required: true,
          },
        ]}>
        <Input
          onChange={(e) => handelOnChange(e)}
          value={formValue.address}
          name='address'
          className='form__group--input form__group--backgroundColor'
          placeholder=' Street Address'
        />
      </Form.Item>
      <FormItem label='Gender'>
        <Radio.Group
          name='gender'
          onChange={(e) => handelOnChange(e)}
          defaultValue='m'
          value={formValue.gender}>
          <Radio value='m'>Male</Radio>
          <Radio value='f'>Female</Radio>
        </Radio.Group>
      </FormItem>
      <Form.Item className='form__btn--center'>
        <Button
          type='primary'
          htmlType='submit'
          size='large'
          className='form__btn'
          onClick={() => {
            message.success('Update your profile success!', 3);
            handleSave(list.id);
          }}>
          SAVE CHANGE
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AccountUser;
