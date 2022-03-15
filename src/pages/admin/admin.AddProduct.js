/** @format */

import React from "react";
import { Form, Input, Radio, Button,message, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import ValidateMessage from "../form/ValidateMessage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postListProductApi } from "../../redux/reducers/productSlice";
import "../../style/form.scss";
const AddProduct = () => {
  const dispatch = useDispatch();
  const [formVl, setFormVl] = useState({
    name: "",
    type: "",
    price: "",
    type: "",
    color: "",
    stock: "",
    description: "",
    img:""
  });

  const handleOnChange = (e) => {
    if (e.target) {
      setFormVl({ ...formVl, [e.target.name]: e.target.value });
      console.log("e", e.target.value);
    } else {
      setFormVl({ ...formVl });
    }
  };

  const handleSave = () => {
    if (!!formVl) {
      message.success('Add product success!', 3);
      dispatch(postListProductApi({ ...formVl }));
    } else {
    }
  };
  const props = {
    name: 'file',
    action: formVl.img,
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Form name='nest-messages' validateMessages={ValidateMessage}>
      <Form.Item name='name' label='Name Product' rules={[{ required: true }]}>
        <Input
          name='name'
          placeholder='Enter name product'
          onChange={(e) => {
            handleOnChange(e);
          }}
          value={formVl.name}
        />
      </Form.Item>
      <Form.Item name='type' label='Type' rules={[{ required: true }]}>
        <Radio.Group
          name='type'
          defaultValue='vegetables'
          onChange={(e) => {
            handleOnChange(e);
          }}
          value={formVl.type}>
          <Radio value='vegetables'>Vegetables</Radio>
          <Radio value='juice'>Juice</Radio>
          <Radio value='fruits'>Fruit</Radio>
          <Radio value='meats'>Meats</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name='color' label='Color' rules={[{ required: true }]}>
        <Radio.Group
          name='color'
          defaultValue='red'
          onChange={(e) => {
            handleOnChange(e);
          }}
          value={formVl.color}>
          <Radio value='red'>Red</Radio>
          <Radio value='orange'>Orange</Radio>
          <Radio value='purple'>Purple</Radio>
          <Radio value='green'>Green</Radio>
          <Radio value='yellow'>Yellow</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name='price' label='Price' rules={[{ required: true }]}>
        <Input
          name='price'
          placeholder='Enter price product'
          onChange={(e) => {
            handleOnChange(e);
          }}
          value={formVl.price}
        />
      </Form.Item>
      <Form.Item name='stock' label='Stock' rules={[{ required: true }]}>
        <Input
          name='stock'
          placeholder='Enter stock product'
          onChange={(e) => {
            handleOnChange(e);
          }}
          value={formVl.stock}
        />
      </Form.Item>
      <Form.Item
        name='description'
        label='Description'
        rules={[{ required: true }]}>
        <Input.TextArea
          name='description'
          placeholder='Enter description product'
          onChange={(e) => {
            handleOnChange(e);
          }}
          value={formVl.description}
        />
      </Form.Item>
      <Form.Item name='image' label='Image'>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button
          className='form__btn'
          type='primary'
          htmlType='submit'
          onClick={handleSave}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
