/** @format */

import React from "react";
import { Form, Input, Radio, Button,message, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import ValidateMessage from "../form/ValidateMessage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postListProductApi } from "../../redux/reducers/productSlice";
import "../../style/form.scss";
import axios from 'axios';
const AddProduct = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState()
  const [formVl, setFormVl] = useState({
    name: "",
    type: "",
    price: "",
    color: "",
    stock: "",
    description: "",
    img: ""
  });
  const handleOnChange = (e) => {
    if (e.target) {
      setFormVl({ ...formVl, [e.target.name]: e.target.value });
      console.log("e", e.target.value);
    } else {
      setFormVl({ ...formVl });
    }
  };

  const handleSave = async () => {
    // console.log(image[0].name)
    formVl.img = image[0];
    let formData = new FormData();
    formData.append('name', formVl.name);
    formData.append('type', formVl.type);
    formData.append('description', formVl.description);
    formData.append('price', formVl.price);
    formData.append('color', formVl.color);
    formData.append('stock', formVl.stock);
    formData.append('img', formVl.img);
    console.log(formData)
    // const { data } = await axios.post(`http://localhost:5000/products`, formData)
    // console.log(data)
    // if (!!formVl) {
      // console.log(formVl)
      message.success('Add product success!', 3);
    await dispatch(postListProductApi(formData));
    // } else {
    // }
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
      <Form.Item name='img' label='Image'>
        <Input name='img' accept="image/*" type="file" onChange={(e) => {
            setImage(e.target.files);
          }}></Input>
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
