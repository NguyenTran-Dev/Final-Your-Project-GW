/** @format */

import React from "react";
import "./Modal.scss";
import {
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getListProductApi, setSort } from "../../redux/reducers/productSlice";
import { Button, Input, Select, Modal,message } from "antd";
import { useState } from "react";
import {
  deleteOrderApi,
  getOrderApi,
  getOrderFindOneApi,
  getOrderUserApi,
  searchItem,
} from "../../redux/reducers/orderSlice";
import { getListCustomerApi } from "../../redux/reducers/customerSlice";
import moment from "moment";

const HistoryOrder = () => {
  const dispatch = useDispatch();
  const list = JSON.parse(localStorage.getItem("inforUser"));
  const { listProductApi } = useSelector((state) => state.listProduct);
  const { listOrderUserApi, listOrderFindOneApi } = useSelector(
    (state) => state.listOrder
  );
  const [visible, setVisible] = useState(false);
  const [idBill, setIdBill] = useState();
  const { Option } = Select;
  React.useEffect(() => {
    dispatch(getListProductApi());
    dispatch(getOrderApi());
    dispatch(getListCustomerApi());
    dispatch(getOrderUserApi());
  }, []);
  React.useEffect(() => {
    dispatch(getOrderUserApi(list.id));
  }, [list.id]);
  React.useEffect(() => {
    dispatch(getOrderFindOneApi(idBill));
  }, [idBill]);
  

  const [formNewVl, setFormNewVl] = useState({
    name: "",
    fullName: "",
    price: "",
    type: "",
    search: "",
  });
  const handelOnChange = (e) => {
    if (e.target) {
      setFormNewVl({ ...formNewVl, [e.target.name]: e.target.value });
    } else {
      setFormNewVl({ ...formNewVl });
    }
  };
  function handleChange(value) {
    dispatch(setSort(value));
  }
  const handleSearch = () => {
    dispatch(searchItem(formNewVl.search));
  };
  const renderBill = () => {
    return listOrderFindOneApi?.map((item) => {
      const product_id = item.product_id;

      const infoProduct = listProductApi.filter((item) => {
        return item.id === product_id;
      });
      const renderProduct = infoProduct.map((item)=>{
        return(
          <>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </>
        )
      })
      return (
        <tr>
          {renderProduct}
          <td>{item.quantity}</td>
        </tr>
      );
    });
  };
  const setIsShow = () => {
    setVisible(false);
  };
  const renderListOrder = () => {
    return listOrderUserApi?.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.total} USD</td>
          <td>{item.status}</td>
          <td>{moment(item.date).format("DD-MM-YYYY")}</td>
          <td>
            <Button
              type='primary'
              onClick={() => {
                setIdBill(item.id);
                setVisible(true);
              }}>
              View
            </Button>
          </td>
          <td className='icon'>
            <DeleteOutlined onClick={async()=>{
              await dispatch(deleteOrderApi(item.id));
              dispatch(getOrderUserApi());
              window.location.reload()
            }}/>
          </td>
        </tr>
      );
    });
  };

  const renderView = ()=>{
    // console.log(" {renderBill()}", renderBill())
    return(
      <div className="modal" onClick={setIsShow}>
          <div className="content1">
            <table>
              <tr>
                <th className="id">STT</th>
                <th className="name">Product</th>
                <th className="total">Price ($)</th>
                <th className="quantity">Quantity</th>
              </tr>
              {renderBill()}
            </table>
            <div className="modal-btn">
              <Button type="primary" onClick={setIsShow} id="btn">
                OK
              </Button>
            </div>
          </div>
        </div>
    )
  }
  
  return (
    <div className='admin__users'>
      <div className='top top--flex'>
        <div>
          <Select
            defaultValue='All'
            style={{ width: 120 }}
            onChange={handleChange}>
            <Option value='All'>All</Option>
            <Option value='Name'>Name (A-Z)</Option>
            <Option value='total'>Total (L-H)</Option>
            <Option value='status'>Status</Option>
          </Select>
        </div>
        <div className='top--width top--flex'>
          <Input
            placeholder='Search...'
            name='search'
            onChange={(e) => {
              handelOnChange(e);
            }}
            value={formNewVl.search}
          />
          <Button htmlType='html' onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      <table>
        <tr>
          <th className='id'>STT</th>
          <th className='total'>Price($)</th>
          <th className='status'>Status</th>
          <th className='date'>Date</th>
          <th className='view'>View</th>
          <th className='delete'>Delete</th>
        </tr>
        {renderListOrder()}
      </table>
      {visible ? 
        renderView()
        
       : null}
       
    </div>
  );
};
export default HistoryOrder;
